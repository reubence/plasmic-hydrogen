import {useQuery} from '@shopify/hydrogen';
import {PLASMIC} from '~/plasmic-init';
import {
  PlasmicRootProvider,
  PlasmicComponent,
  extractPlasmicQueryData,
} from '@plasmicapp/loader-react';

export function usePlasmicData(components: string[]) {
  const {data, error} = useQuery([`plasmic`, ...components], async () => {
    const plasmicData = await PLASMIC.maybeFetchComponentData(...components);
    if (!plasmicData) {
      return null;
    }
    const queryData = await extractPlasmicQueryData(
      <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
        <PlasmicComponent component={plasmicData.entryCompMetas[0].name} />
      </PlasmicRootProvider>,
    );

    return {plasmicData, queryData};
  });

  if (error) {
    throw error;
  }

  return data;
}
