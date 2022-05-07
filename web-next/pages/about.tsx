import PageLayout from '@/components/PageLayout';

export const About = () => {
  return (
    <PageLayout>
      <h1 className="mb-6 text-2xl font-bold leading-none lg:mb-8 lg:text-4xl">
        About
      </h1>

      <p className="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet leo ut magna sagittis iaculis. Sed sed ipsum volutpat, congue
        tortor a, eleifend dui. Aliquam fringilla viverra facilisis. Maecenas in
        risus libero. Pellentesque vel lorem pretium arcu tempus iaculis.
        Integer tristique arcu eu magna rhoncus, non laoreet sem elementum.
        Donec leo ante, volutpat eu eleifend id, vulputate sit amet lorem. Nunc
        tempor sem non diam gravida mattis. Nullam nec dui in arcu ultrices
        placerat vitae nec tellus. Sed lacinia justo tincidunt orci interdum,
        sit amet fermentum odio tristique.
      </p>

      <h2 className="mb-6 text-2xl font-bold leading-none lg:mb-8 lg:text-4xl">
        Work Experience
      </h2>

      <h2 className="mb-6 text-2xl font-bold leading-none lg:mb-8 lg:text-4xl">
        Education
      </h2>
    </PageLayout>
  );
};

export default About;
