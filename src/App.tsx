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
        <div className="flex flex-wrap justify-center">
          <div className="basis-2/3 sm:basis-1/3 pb-5 sm:pr-5">
            <AvatarPreview id="avatar-preview">
              <SentryAvatar config={{ face, hairColor }} />
            </AvatarPreview>
            <Button onClick={() => onDownload()}>Download</Button>
          </div>

          <div className="basis-full sm:basis-2/3">
            <div className="bg-card rounded-lg pt-2 pb-3">
              <Tabs defaultValue="face">
                <ScrollArea>
                  <div className="w-0">
                    <TabsList className="bg-transparent p-0 px-3 m-0">
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
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
