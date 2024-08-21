import Face from "./components/avatar/face/face";
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
import Eyes from "./components/avatar/eyes";
import {
  EyesStyle,
  FaceStyle,
  PartProps,
} from "./components/avatar/sentry-avatar.types";

/**
 * Available download aspect ratio options.
 */
type AspectRatioOption = "9:16" | "1:1" | "16:9";

/**
 * Available avatar parts.
 */
enum AvatarPart {
  FACE = "face",
  EYES = "eyes",
}

/**
 * Mapping of available styles for each avatar part.
 */
type AvatarPartStyles = {
  [AvatarPart.FACE]: FaceStyle;
  [AvatarPart.EYES]: EyesStyle;
};

/**
 * Render function type for displaying each body part.
 */
export type RenderFunction<PartStyle> = {
  [key in AvatarPart]: React.ComponentType<PartProps<PartStyle>>;
};

/**
 * Type definition for all avatar generator options.
 */
type AvatarGeneratorConfigOptions = {
  /**
   * Key is the body part
   */
  [key in AvatarPart]: {
    /**
     * Preset of colors available for the part.
     */
    colors: string[];
    /**
     * Default color set when the editor is first loaded.
     */
    defaultColor: string;
    /**
     * Neutral color used to display all styles available for the part.
     */
    neutralColor: string;
    /**
     * Available styles for the part.
     */
    styles: AvatarPartStyles[key][];
    /**
     * Default style for the part when the editor is first loaded.
     */
    defaultStyle: AvatarPartStyles[key];
    /**
     * React component used to render this part.
     */
    render: RenderFunction<AvatarPartStyles[key]>[key];
  };
};

/**
 * Type definition for how the avatar config is stored.
 */
type AvatarConfig = {
  [key in AvatarPart]: {
    color: string;
    style: AvatarPartStyles[key];
  };
};

const configOptions: AvatarGeneratorConfigOptions = {
  face: {
    colors: ["#FDFAF3", "#F2E39F", "#D87436", "#9F4112", "#4F2210", "#0E0705"],
    defaultColor: "#F2E39F",
    neutralColor: "#8E8E8E",
    styles: Object.values(FaceStyle),
    defaultStyle: Object.values(FaceStyle)[0],
    render: Face,
  },
  eyes: {
    colors: ["#FDFAF3", "#F2E39F", "#D87436", "#9F4112", "#4F2210", "#0E0705"],
    defaultColor: "#F2E39F",
    neutralColor: "#444444",
    styles: Object.values(EyesStyle),
    defaultStyle: Object.values(EyesStyle)[0],
    render: Eyes,
  },
};

const tabs: { name: string; value: string }[] = [
  { name: "Face", value: "face" },
  { name: "Eyes", value: "eyes" },
  // { name: "Hair", value: "hair" },
  // { name: "Nose", value: "nose" },
  // { name: "Mouth", value: "mouth" },
  // { name: "Facial", value: "facial" },
  // { name: "Accessories", value: "accessories" },
];

/**
 * Generates the default config for the avatar based on all part default config values.
 *
 * @returns an AvatarConfig object with all parts defined with its default values.
 */
const generateDefaultConfig = (): AvatarConfig => {
  const defaultConfig: AvatarConfig = {} as AvatarConfig;

  for (const option in configOptions) {
    const part = option as keyof AvatarConfig;
    const partConfig = configOptions[part];

    (defaultConfig[part] as unknown) = {
      color: partConfig.defaultColor,
      style: partConfig.defaultStyle,
    };
  }

  return defaultConfig;
};

function App() {
  const [currentTab, setCurrentTab] = useState("face");

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

  const [config, setConfig] = useState<AvatarConfig>(generateDefaultConfig());

  const setPartColor = (part: AvatarPart, color: string) => {
    const newConfig = { ...config };
    newConfig[part]!.color = color;

    setConfig(newConfig);
  };

  const setPartStyle = <T extends AvatarPart>(
    part: AvatarPart,
    style: AvatarPartStyles[T]
  ) => {
    const newConfig = { ...config };
    newConfig[part]!.style = style;

    setConfig(newConfig);
  };

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
                  face: {
                    color: config[AvatarPart.FACE]!.color,
                    style: config[AvatarPart.FACE]!.style,
                  },
                  eyes: {
                    color: config[AvatarPart.EYES]!.color,
                    style: config[AvatarPart.EYES]!.style,
                  },
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

              {tabs.map(({ value }) => {
                const part = value as AvatarPart;
                const partConfig = configOptions[part];
                const currentPartConfig = config[part]!;

                return (
                  <TabsContent key={part} value={part} className="grow">
                    <TabSectionLabel>Style</TabSectionLabel>
                    <AvatarGridOptions
                      values={partConfig.styles}
                      currentValue={currentPartConfig.style}
                      setValue={(style) => setPartStyle(part, style)}
                      render={(style) => {
                        const Component =
                          partConfig.render as React.ComponentType<
                            PartProps<unknown>
                          >;

                        return (
                          <Component config={{ style, color: "#8E8E8E" }} />
                        );
                      }}
                    />
                    <TabSectionLabel>Color</TabSectionLabel>
                    <AvatarColorOptions
                      colors={partConfig.colors}
                      currentColor={currentPartConfig.color}
                      setColor={(color) => setPartColor(part, color)}
                    />
                  </TabsContent>
                );
              })}

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
