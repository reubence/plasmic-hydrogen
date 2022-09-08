import {
  PlasmicClientRootProvider,
  PlasmicClientComponent,
} from '~/components/plasmic-helpers.client';
import {usePlasmicData} from '~/lib/plasmic';
import {NotFound} from '~/components/index.server';
import {HydrogenRouteProps} from '@shopify/hydrogen';

export default function PlasmicPage({params}: HydrogenRouteProps) {
  const {handle} = params;

  // If the url is /pages/hello, then `handle` will be "hello". We convert this into the page path
  // that we used in Plasmic for the corresponding page.
  const data = usePlasmicData([`/${handle}`]);
  if (!data) {
    return <NotFound />;
  }
  const {plasmicData, queryData} = data;
  return (
    <PlasmicClientRootProvider
      prefetchedData={plasmicData}
      prefetchedQueryData={queryData}
    >
      <PlasmicClientComponent component={plasmicData.entryCompMetas[0].name} />
    </PlasmicClientRootProvider>
  );
}
