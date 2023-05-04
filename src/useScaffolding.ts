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
    username: usePrompt("username"),
    packageName: usePrompt("packageName"),
    description: usePrompt("description"),
    authorName: usePrompt("authorName"),
    authorEmail: usePrompt("authorEmail"),
  });

  generator.copy(useStubsPath(), useCurrentPath());
};

export default useScaffolding;
