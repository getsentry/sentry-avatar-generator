import Face, { FaceProps } from "./components/avatar/face/face";
import SentryAvatar, {
  SentryAvatarConfig,
} from "./components/avatar/sentry-avatar";
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
import { useEffect, useState } from "react";
import AvatarGridOptions from "./components/editor/avatar-grid-options";
import domtoimage from "dom-to-image";
import { Button } from "./components/ui/button";
import { saveAs } from "file-saver";
import AvatarColorOptions from "./components/editor/avatar-color-options";
import {
  DownloadIcon,
  LoopIcon,
  Share2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import Eyes, { EyesProps } from "./components/avatar/eyes/eyes";
import {
  AccessoriesStyle,
  BrowsStyle,
  EarStyle,
  EyesStyle,
  FaceStyle,
  FacialHairStyle,
  HairStyle,
  MouthStyle,
  NoseStyle,
} from "./components/avatar/sentry-avatar.types";
import Brows, { BrowsProps } from "./components/avatar/brows/brows";
import Mouth, { MouthProps } from "./components/avatar/mouth/mouth";
import { toast, Toaster } from "sonner";
import Ear, { EarProps } from "./components/avatar/ear/ear";
import Hair, { HairProps } from "./components/avatar/hair/hair";
import Nose, { NoseProps } from "@/components/avatar/nose/nose";
import FacialHair, {
  FacialHairProps,
} from "@/components/avatar/facial-hair/facial-hair";
import Accessories, {
  AccessoriesProps,
} from "@/components/avatar/accessories/accessories";
import AvatarDownloadCircleFormat from "@/components/editor/avatar-download-formats/avatar-download-circle-format";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  BROWS = "brows",
  MOUTH = "mouth",
  EAR = "ear",
  HAIR = "hair",
  NOSE = "nose",
  FACIAL_HAIR = "facial-hair",
  ACCESSORIES = "accessories",
}

/**
 * Mapping of available styles for each avatar part.
 */
type AvatarPartStyles = {
  [AvatarPart.FACE]: FaceStyle;
  [AvatarPart.EYES]: EyesStyle;
  [AvatarPart.BROWS]: BrowsStyle;
  [AvatarPart.MOUTH]: MouthStyle;
  [AvatarPart.EAR]: EarStyle;
  [AvatarPart.HAIR]: HairStyle | null;
  [AvatarPart.NOSE]: NoseStyle;
  [AvatarPart.FACIAL_HAIR]: FacialHairStyle | null;
  [AvatarPart.ACCESSORIES]: AccessoriesStyle | null;
};

/**
 * Mapping of props needed for each avatar part.
 */
type AvatarPartProps = {
  [AvatarPart.FACE]: FaceProps;
  [AvatarPart.EYES]: EyesProps;
  [AvatarPart.BROWS]: BrowsProps;
  [AvatarPart.MOUTH]: MouthProps;
  [AvatarPart.EAR]: EarProps;
  [AvatarPart.HAIR]: HairProps;
  [AvatarPart.NOSE]: NoseProps;
  [AvatarPart.FACIAL_HAIR]: FacialHairProps;
  [AvatarPart.ACCESSORIES]: AccessoriesProps;
};

/**
 * Render function type for displaying each body part.
 */
export type RenderFunction<Props extends AvatarPartProps[AvatarPart]> = {
  [key in AvatarPart]: React.ComponentType<Props>;
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
    colors?: string[];
    /**
     * Default color set when the editor is first loaded.
     */
    defaultColor?: string;
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
     * Allows the user to not have this part as an option.
     */
    allowNull: boolean;
    /**
     * React component used to render this part.
     */
    render: RenderFunction<AvatarPartProps[key]>[key];
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
  [AvatarPart.FACE]: {
    colors: ["#eed6cb", "#e6c3b3", "#d29779", "#c06a3f", "#864a2d", "#4d2a1a"],
    defaultColor: "#d29779",
    neutralColor: "#8E8E8E",
    styles: Object.values(FaceStyle),
    defaultStyle: Object.values(FaceStyle)[0],
    allowNull: false,
    render: Face,
  },
  [AvatarPart.EYES]: {
    colors: ["#475676", "#7f8e91", "#515055", "#54513e", "#5a381c", "#19110f"],
    defaultColor: "#54513e",
    neutralColor: "#444444",
    styles: Object.values(EyesStyle),
    defaultStyle: Object.values(EyesStyle)[0],
    allowNull: false,
    render: Eyes,
  },
  [AvatarPart.BROWS]: {
    neutralColor: "#444444",
    styles: Object.values(BrowsStyle),
    defaultStyle: Object.values(BrowsStyle)[0],
    allowNull: false,
    render: Brows,
  },
  [AvatarPart.MOUTH]: {
    neutralColor: "#444444",
    styles: Object.values(MouthStyle),
    defaultStyle: Object.values(MouthStyle)[0],
    allowNull: false,
    render: Mouth,
  },
  [AvatarPart.NOSE]: {
    neutralColor: "#444444",
    styles: Object.values(NoseStyle),
    defaultStyle: Object.values(NoseStyle)[0],
    allowNull: false,
    render: Nose,
  },
  [AvatarPart.EAR]: {
    neutralColor: "#444444",
    styles: Object.values(EarStyle),
    defaultStyle: Object.values(EarStyle)[0],
    allowNull: false,
    render: Ear,
  },
  [AvatarPart.HAIR]: {
    colors: ["#FDFAF3", "#F2E39F", "#D87436", "#9F4112", "#4F2210", "#2d241c"],
    defaultColor: "#2d241c",
    neutralColor: "#444444",
    styles: Object.values(HairStyle),
    defaultStyle: Object.values(HairStyle)[0],
    allowNull: true,
    render: Hair,
  },
  [AvatarPart.FACIAL_HAIR]: {
    neutralColor: "#444444",
    styles: Object.values(FacialHairStyle),
    defaultStyle: null,
    allowNull: true,
    render: FacialHair,
  },
  [AvatarPart.ACCESSORIES]: {
    neutralColor: "#444444",
    styles: Object.values(AccessoriesStyle),
    defaultStyle: null,
    allowNull: true,
    render: Accessories,
  },
};

const tabs: { name: string; value: string }[] = [
  { name: "Face", value: "face" },
  { name: "Hair", value: "hair" },
  { name: "Eyes", value: "eyes" },
  { name: "Brows", value: "brows" },
  { name: "Ear", value: "ear" },
  { name: "Nose", value: "nose" },
  { name: "Mouth", value: "mouth" },
  { name: "Facial Hair", value: "facial-hair" },
  { name: "Accessories", value: "accessories" },
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

const updateQueryString = (config: AvatarConfig) => {
  const jsonString = JSON.stringify(config);
  const encodedConfig = btoa(jsonString);

  // set config query string
  const url = new URL(window.location.href);
  url.searchParams.set("c", encodedConfig);
  history.pushState(null, "", url);
};

const decodeQueryString = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const config = params.get("c");

    if (config) {
      const decodedConfig = JSON.parse(atob(config));

      return { ...generateDefaultConfig(), ...decodedConfig };
    }
  } catch {
    toast.error("Unable to load shared avatar.");

    // clear config query string
    const url = new URL(window.location.href);
    url.searchParams.delete("c");
    history.pushState(null, "", url);
  }

  return null;
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

  // parse from query string and set it as the current config
  useEffect(() => {
    const initialConfig = decodeQueryString();

    if (initialConfig) {
      setConfig(initialConfig);
    }
  }, []);

  const setPartColor = (part: AvatarPart, color: string) => {
    const newConfig = { ...config };
    newConfig[part]!.color = color;

    setConfig(newConfig);
    updateQueryString(newConfig);
  };

  const setPartStyle = <T extends AvatarPart>(
    part: AvatarPart,
    style: AvatarPartStyles[T]
  ) => {
    const newConfig = { ...config };
    newConfig[part]!.style = style;

    setConfig(newConfig);
    updateQueryString(newConfig);
  };

  const [isExportDialogOpen, setIsExportDialogOpen] = useState<boolean>(false);
  const [showExport, setShowExport] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDownload = async (_aspectRatio: AspectRatioOption) => {
    // first open dialog
    setIsExportDialogOpen(true);

    // then we show the exportable node
    setShowExport(true);

    // wait a few seconds
    await new Promise((f) => setTimeout(f, 500));

    // generate an image right away
    domtoimage
      .toPng(document.getElementById("circle-export")!)
      .then(function (dataUrl) {
        const img = new Image();
        img.src = dataUrl;

        // show the image as a result
        const previewDiv = document.getElementById("export-image-preview");
        previewDiv!.innerHTML = "";
        previewDiv?.appendChild(img);

        // generate an image blob and download for the user
        domtoimage
          .toBlob(document.getElementById("circle-export")!)
          .then(function (blob) {
            saveAs(blob, "sentry-avatar.png");

            // hide the export
            setShowExport(false);
          });
      });
  };

  const onShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Avatar URL copied!");
  };

  const avatarConfig: SentryAvatarConfig = {
    face: {
      color: config[AvatarPart.FACE].color,
      style: config[AvatarPart.FACE].style,
    },
    hair: {
      color: config[AvatarPart.HAIR].color,
      style: config[AvatarPart.HAIR].style,
    },
    eyes: {
      color: config[AvatarPart.EYES].color,
      style: config[AvatarPart.EYES].style,
      faceColor: config[AvatarPart.FACE].color,
    },
    brows: {
      style: config[AvatarPart.BROWS].style,
      hairColor: config[AvatarPart.HAIR].color,
    },
    mouth: {
      style: config[AvatarPart.MOUTH].style,
      faceColor: config[AvatarPart.FACE].color,
    },
    ear: {
      style: config[AvatarPart.EAR].style,
      faceColor: config[AvatarPart.FACE].color,
    },
    nose: {
      style: config[AvatarPart.NOSE].style,
      faceColor: config[AvatarPart.FACE]!.color,
    },
    facialHair: {
      style: config[AvatarPart.FACIAL_HAIR].style,
      hairColor: config[AvatarPart.HAIR].color,
    },
    accessories: {
      style: config[AvatarPart.ACCESSORIES].style,
      color: config[AvatarPart.ACCESSORIES].color,
    },
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container max-w-screen-xl my-10">
        <div className="grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-5 gap-3">
          <div className="order-0 sm:col-span-2 bg-[#ED5781] rounded-lg align-middle justify-center flex">
            <AvatarPreview id="avatar-preview">
              <SentryAvatar config={avatarConfig} />
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
                      allowNullValue={partConfig.allowNull}
                      render={(style) => {
                        const Component =
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          partConfig.render as React.ComponentType<any>;

                        return (
                          <Component
                            config={{
                              style,
                              color: "#8E8E8E",
                              faceColor: "#8E8E8E",
                              hairColor: "#8E8E8E",
                            }}
                          />
                        );
                      }}
                    />
                    {partConfig.colors && (
                      <>
                        <TabSectionLabel>Color</TabSectionLabel>
                        <AvatarColorOptions
                          colors={partConfig.colors}
                          currentColor={currentPartConfig.color}
                          setColor={(color) => setPartColor(part, color)}
                        />
                      </>
                    )}
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

            <Button
              className="col-span-2 text-xs @xs:text-sm @sm:text-lg"
              variant="sentry"
              onClick={() => onDownload("9:16")}
            >
              Download
              <DownloadIcon className="ml-1 h-5 w-5 min-w-5 hidden @xs:inline-block" />
            </Button>
            {/* 
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
            </DropdownMenu> */}

            <Button onClick={onShare} variant="sentry">
              <Share2Icon className="h-6 w-6 min-w-5" />
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isExportDialogOpen} onOpenChange={setIsExportDialogOpen}>
        <DialogContent className="z-[300]">
          <DialogHeader>
            <DialogTitle>Download Avatar</DialogTitle>
            <DialogDescription className="flex flex-col justify-center items-center">
              {showExport && (
                <ReloadIcon className="w-20 h-20 animate-spin text-white m-20" />
              )}
              <div id="export-image-preview" />
              {!showExport && (
                <Button
                  variant="sentry"
                  onClick={() => setIsExportDialogOpen(false)}
                  className="px-10 mt-5"
                >
                  Close
                </Button>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Toaster />
      {showExport && <AvatarDownloadCircleFormat avatarConfig={avatarConfig} />}
    </ThemeProvider>
  );
}

export default App;
