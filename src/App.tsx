import Face from "./components/avatar/face";
import SentryAvatar from "./components/avatar/sentry-avatar";
import AvatarPreview from "./components/editor/avatar-preview";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Tabs,
  TabsContent,
  TabSectionLabel,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "./components/ui/scroll-area";
import { useState } from "react";
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

  const [faceColor, setFaceColor] = useState<string>("#FDFAF3");
  const faceColors: string[] = [
    "#FDFAF3",
    "#F2E39F",
    "#D87436",
    "#9F4112",
    "#4F2210",
    "#0E0705",
  ];

  // const [eyeColor, setEyeColor] = useState<string>("#FDFAF3");
  // const eyeColors: string[] = [
  //   "#FDFAF3",
  //   "#F2E39F",
  //   "#D87436",
  //   "#9F4112",
  //   "#4F2210",
  //   "#0E0705",
  // ];

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
      <div className="container max-w-screen-xl my-10">
        <div className="grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-5 gap-3">
          <div className="order-0 sm:col-span-2 bg-[#ED5781] rounded-lg align-middle justify-center flex">
            <AvatarPreview id="avatar-preview">
              <SentryAvatar
                config={{
                  face: { color: faceColor, style: "main" },
                  eyes: { color: "#FFF", style: "main" },
                }}
              />
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
                      <TabsTrigger value={tab.value} className="text-base">
                        {tab.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>

              <TabsContent value="face" className="grow">
                <TabSectionLabel>Style</TabSectionLabel>
                <AvatarGridOptions
                  values={["main"]}
                  currentValue={"main"}
                  setValue={() => {}}
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  render={(_face) => (
                    <Face config={{ style: "main", color: "#8E8E8E" }} />
                  )}
                />
                <TabSectionLabel>Color</TabSectionLabel>
                <AvatarColorOptions
                  colors={faceColors}
                  currentColor={faceColor}
                  setColor={setFaceColor}
                />
              </TabsContent>

              <TabsContent value="hair" className="grow">
                hair goes here
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

          <div className="order-0 sm:order-2 sm:col-span-2 grid grid-cols-5 gap-2 @container">
            <Button
              onClick={() => {}}
              className="col-span-2 text-xs @xs:text-sm @sm:text-lg"
              variant="colorful"
            >
              Randomize
              <LoopIcon className="ml-2 h-5 w-5 min-w-5 hidden @xs:inline-block" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="col-span-2 text-xs @xs:text-sm @sm:text-lg"
                  variant="sentry"
                >
                  Download{" "}
                  <ChevronDownIcon className="ml-1 h-5 w-5 min-w-5 hidden @xs:inline-block" />
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

            <Button onClick={() => {}} variant="sentry">
              <Share2Icon className="h-6 w-6 min-w-5" />
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
