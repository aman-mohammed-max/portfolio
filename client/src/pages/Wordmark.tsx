export const Wordmark = (): JSX.Element => {
  // Navigation breadcrumb items
  const breadcrumbItems = [
    { label: "Tokens", active: true },
    { label: "/", active: false },
    { label: "Wordmark", active: false },
  ];

  // Right side icon items in the top nav bar
  const rightIcons = [
    { alt: "At symbol", src: "/figmaAssets/at-symbol.svg" },
    { alt: "Component", src: "/figmaAssets/component.svg" },
    { alt: "Component solid", src: "/figmaAssets/component-solid.svg" },
    { alt: "Circle dotted line", src: "/figmaAssets/circle-dotted-line.svg" },
  ];

  return (
    <div className="inline-flex flex-col items-start relative bg-white">
      {/* Top navigation bar */}
      <div className="w-[1600px] px-32 py-0 flex items-start relative flex-[0_0_auto]">
        <div className="relative self-stretch w-px bg-zinc-200" />

        <div className="flex items-start gap-2 p-8 relative flex-1 grow bg-white">
          <div className="flex items-start justify-between relative flex-1 grow">
            {/* Breadcrumb left side */}
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <img
                className="relative w-[15px] h-[15px]"
                alt="Circle dotted line"
                src="/figmaAssets/circle-dotted-line.svg"
              />
              {breadcrumbItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative w-fit mt-[-1.00px] font-labels-txt-compact-small-plus font-[number:var(--labels-txt-compact-small-plus-font-weight)] text-[length:var(--labels-txt-compact-small-plus-font-size)] tracking-[var(--labels-txt-compact-small-plus-letter-spacing)] leading-[var(--labels-txt-compact-small-plus-line-height)] whitespace-nowrap [font-style:var(--labels-txt-compact-small-plus-font-style)] ${
                    item.active ? "text-zinc-900" : "text-zinc-500"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>

            {/* Right side icons and label */}
            <div className="inline-flex items-center justify-end gap-2 relative flex-[0_0_auto]">
              {rightIcons.map((icon, index) => (
                <img
                  key={index}
                  className="relative w-[15px] h-[15px]"
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
              <div className="relative w-fit mt-[-1.00px] font-labels-txt-compact-small-plus font-[number:var(--labels-txt-compact-small-plus-font-weight)] text-zinc-500 text-[length:var(--labels-txt-compact-small-plus-font-size)] text-right tracking-[var(--labels-txt-compact-small-plus-letter-spacing)] leading-[var(--labels-txt-compact-small-plus-line-height)] whitespace-nowrap [font-style:var(--labels-txt-compact-small-plus-font-style)]">
                Medusa UI
              </div>
            </div>
          </div>
        </div>

        <div className="relative self-stretch w-px bg-zinc-200" />
      </div>

      <div className="relative w-[1600px] h-px bg-zinc-200" />

      {/* Page title section */}
      <div className="w-[1600px] px-32 py-0 flex items-start relative flex-[0_0_auto]">
        <div className="relative self-stretch w-px bg-zinc-200" />

        <div className="flex items-start gap-2 p-8 grow bg-white relative flex-1">
          <h3 className="mt-[-1.00px] font-headers-website-h3 font-[number:var(--headers-website-h3-font-weight)] text-zinc-900 text-[length:var(--headers-website-h3-font-size)] tracking-[var(--headers-website-h3-letter-spacing)] leading-[var(--headers-website-h3-line-height)] relative flex-1 [font-style:var(--headers-website-h3-font-style)]">
            Wordmark
          </h3>
        </div>

        <div className="relative self-stretch w-px bg-zinc-200" />
      </div>

      <div className="relative w-[1600px] h-px bg-zinc-200" />

      {/* Brands section */}
      <div className="w-[1600px] px-32 py-0 flex items-start relative flex-[0_0_auto]">
        <div className="relative self-stretch w-px bg-zinc-200" />

        <div className="flex flex-col items-start gap-8 pt-8 pb-16 px-8 relative flex-1 grow bg-white">
          {/* Section label */}
          <div className="relative self-stretch mt-[-1.00px] font-code-labels-code-label-xsmall font-[number:var(--code-labels-code-label-xsmall-font-weight)] text-zinc-600 text-[length:var(--code-labels-code-label-xsmall-font-size)] tracking-[var(--code-labels-code-label-xsmall-letter-spacing)] leading-[var(--code-labels-code-label-xsmall-line-height)] [font-style:var(--code-labels-code-label-xsmall-font-style)]">
            BRANDS
          </div>

          {/* Brand logos row */}
          <div className="gap-40 self-stretch w-full flex items-start relative flex-[0_0_auto]">
            {/* Medusa brand logo */}
            <div className="relative w-[265px] h-16">
              <img
                className="absolute w-[70.94%] h-[62.50%] top-[10.94%] left-[27.55%]"
                alt="Medusa"
                src="/figmaAssets/medusa.svg"
              />
              <img
                className="absolute w-[20.00%] h-[89.06%] top-[5.47%] left-0"
                alt="Vector"
                src="/figmaAssets/vector.png"
              />
            </div>

            {/* Bloom brand logo */}
            <div className="relative w-[233.6px] h-16">
              <img
                className="absolute top-[3px] left-0 w-[58px] h-[58px]"
                alt="Spaceing"
                src="/figmaAssets/spaceing.svg"
              />
              <img
                className="absolute top-0 left-[70px] w-[163px] h-16"
                alt="Spacing"
                src="/figmaAssets/spacing.svg"
              />
            </div>
          </div>
        </div>

        <div className="relative self-stretch w-px bg-zinc-200" />
      </div>

      <div className="relative w-[1600px] h-px bg-zinc-200" />

      {/* Footer spacer */}
      <footer className="flex w-[1600px] h-32 items-start px-32 py-0 relative bg-transparent">
        <div className="relative self-stretch w-px bg-zinc-200" />
        <div className="self-stretch grow bg-white relative flex-1" />
        <div className="relative self-stretch w-px bg-zinc-200" />
      </footer>
    </div>
  );
};
