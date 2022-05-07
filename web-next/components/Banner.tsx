interface BannerProps {
  children: React.ReactNode;

  subheading: string;

  heading: string;
}

export const Banner = (props: BannerProps) => {
  return (
    <section className="relative mx-auto mb-8 grid w-full items-center gap-8 py-4 md:grid-cols-[55%_1fr]">
      <div className="text-left">
        <p className="m-0 mb-2 text-xl font-semibold leading-snug">
          {props.subheading}
        </p>
        <h1 className="mb-2 text-5xl font-black leading-none">
          {props.heading}
        </h1>
        {props.children}
      </div>
    </section>
  );
};
