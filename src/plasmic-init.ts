import {initPlasmicLoader} from '@plasmicapp/loader-react';
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'jo1QE8bZrmK4ZTnDXypQ5H', // ID of a project you are using
      token:
        'yF2cDWuVUcuSJ4Fn8ctLFQasrsb45tUGWTVvwdyS5VR3ZqMdStHpxau6vNDEMNrEbdFTbHVZk7QVK2egcJw', // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
