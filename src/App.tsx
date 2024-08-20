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
} from "@radix-ui/react-icons";

function App() {
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

  const onDownload = () => {
    domtoimage
      .toBlob(document.getElementById("avatar-preview")!)
      .then(function (blob) {
        saveAs(blob, "my-node.png");
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
            <Tabs defaultValue="face">
              <ScrollArea className="bg-card rounded-t-md">
                <div className="w-0">
                  <TabsList className="bg-transparent p-0 items-stretch">
                    <TabsTrigger value="face">Face</TabsTrigger>
                    <TabsTrigger value="hair">Hair</TabsTrigger>
                    <TabsTrigger value="eyes">Eyes</TabsTrigger>
                    <TabsTrigger value="nose">Nose</TabsTrigger>
                    <TabsTrigger value="mouth">Mouth</TabsTrigger>
                    <TabsTrigger value="facial">Facial</TabsTrigger>
                    <TabsTrigger value="accessories">Accessories</TabsTrigger>
                  </TabsList>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>

              <TabsContent value="face">
                <AvatarGridOptions
                  values={faces}
                  currentValue={face}
                  setValue={setFace}
                  render={(face) => <Face i={face} />}
                />
              </TabsContent>

              <TabsContent value="hair" className="space-y-3">
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
                  <Button variant="ghost" className="w-full justify-between">
                    9:16 <DownloadIcon />
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Button variant="ghost" className="w-full justify-between">
                    1:1 <DownloadIcon />
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Button variant="ghost" className="w-full justify-between">
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
