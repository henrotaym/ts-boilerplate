#!/usr/bin/env node

import {
  useCurrentPath,
  useGenerator,
  usePackageStubsPath,
  usePrompt,
} from "@henrotaym/scaffolding-utils";

const useStubsPath = usePackageStubsPath("@henrotaym/ts-boilerplate");

const useScaffolding = () => {
  const generator = useGenerator({
    organizationName: usePrompt("Organization name"),
    packageName: usePrompt("Package name"),
    description: usePrompt("Package description"),
    authorName: usePrompt("Author full name (first_name last_name)"),
    authorEmail: usePrompt("Author email"),
  });

  generator.copy(useStubsPath(), useCurrentPath());
};

export default useScaffolding;
