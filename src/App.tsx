import Face from "./components/avatar/face";
import SentryAvatar from "./components/avatar/sentry-avatar";
import AvatarPreview from "./components/editor/avatar-preview";
import { ThemeProvider } from "@/components/theme-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "./components/ui/scroll-area";
import { useState } from "react";
import Hair, { HairColor } from "./components/avatar/hair";
import AvatarGridOptions from "./components/editor/avatar-grid-options";
import domtoimage from "dom-to-image";
import { Button } from "./components/ui/button";
import { saveAs } from "file-saver";
import AvatarColorOptions from "./components/editor/avatar-color-options";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDownIcon,
  DownloadIcon,
  LoopIcon,
  Share2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

type AspectRatioOption = "9:16" | "1:1" | "16:9";

function App() {
  const [currentTab, setCurrentTab] = useState("face");

  const tabs: { name: string; value: string }[] = [
    { name: "Face", value: "face" },
    { name: "Hair", value: "hair" },
    { name: "Eyes", value: "eyes" },
    { name: "Nose", value: "nose" },
    { name: "Mouth", value: "mouth" },
    { name: "Facial", value: "facial" },
    { name: "Accessories", value: "accessories" },
  ];

  const currentIndex = tabs.findIndex((tab) => tab.value === currentTab);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex + 1 < tabs.length;

  const onPrevious = () => {
    if (hasPrevious) {
      const previousIndex = currentIndex - 1;
      setCurrentTab(tabs[previousIndex].value);
    }
  };

  const onNext = () => {
    const nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    setCurrentTab(tabs[nextIndex].value);
  };

  const [face, setFace] = useState(0);
  const faces = [0, 1, 2, 3];

  const [hairColor, setHairColor] = useState<HairColor>("black");
  const hairColors: HairColor[] = ["black", "blonde", "brown", "red"];

  const [hairColorNew, setHairColorNew] = useState<string>("black");
  const hairColorsNewList: string[] = [
    "#FDFAF3",
    "#F2E39F",
    "#D87436",
    "#9F4112",
    "#4F2210",
    "#0E0705",
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDownload = (_aspectRatio: AspectRatioOption) => {
    domtoimage
      .toBlob(document.getElementById("avatar-preview")!)
      .then(function (blob) {
        saveAs(blob, "sentry-avatar.png");
      });
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container max-w-screen-xl mt-10">
        <div className="grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-5 gap-3">
          <div className="order-0 sm:col-span-2 bg-[#ED5781] rounded-lg align-middle justify-center flex">
            <AvatarPreview id="avatar-preview">
              <SentryAvatar config={{ face, hairColor }} />
            </AvatarPreview>
          </div>

          <div className="order-1 sm:col-span-3 bg-white rounded-lg">
            <Tabs
              defaultValue="face"
              className="flex flex-col h-full"
              value={currentTab}
              onValueChange={(value) => setCurrentTab(value)}
            >
              <ScrollArea className="bg-card rounded-t-md w-full">
                <div className="w-0">
                  <TabsList className="bg-transparent p-0 items-stretch">
                    {tabs.map((tab) => (
                      <TabsTrigger value={tab.value}>{tab.name}</TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>

              <TabsContent value="face" className="grow">
                <AvatarGridOptions
                  values={faces}
                  currentValue={face}
                  setValue={setFace}
                  render={(face) => <Face i={face} />}
                />
              </TabsContent>

              <TabsContent value="hair" className="grow">
                <AvatarGridOptions
                  values={hairColors}
                  currentValue={hairColor}
                  setValue={setHairColor}
                  render={(hairColor) => <Hair color={hairColor} />}
                />
                <AvatarColorOptions
                  colors={hairColorsNewList}
                  currentColor={hairColorNew}
                  setColor={setHairColorNew}
                />
              </TabsContent>

              <div>
                {hasPrevious && (
                  <Button
                    variant="link"
                    onClick={() => onPrevious()}
                    className="float-left font-bold text-base px-2"
                  >
                    <ChevronLeftIcon className="h-5 w-5" /> Prev{" "}
                  </Button>
                )}

                {hasNext && (
                  <Button
                    variant="link"
                    onClick={() => onNext()}
                    className="float-right font-bold text-base px-2"
                  >
                    Next <ChevronRightIcon className="h-5 w-5" />
                  </Button>
                )}
              </div>
            </Tabs>
          </div>

          <div className="order-0 sm:order-2 sm:col-span-2 grid grid-cols-5 gap-2">
            <Button onClick={() => {}} className="col-span-2">
              Randomize <LoopIcon className="ml-2 h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-white text-card font-bold col-span-2">
                  Download <ChevronDownIcon className="ml-1 h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => onDownload("9:16")}
                  >
                    9:16 <DownloadIcon />
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => onDownload("1:1")}
                  >
                    1:1 <DownloadIcon />
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => onDownload("16:9")}
                  >
                    16:9 <DownloadIcon />
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button onClick={() => {}} className="bg-white text-card">
              <Share2Icon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
