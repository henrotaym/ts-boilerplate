import {
  useConfirm,
  useCurrentPath,
  useGenerator,
  useDisplayJson,
  usePackageStubsPath,
  usePrompt,
  useSentence,
} from "@henrotaym/scaffolding-utils";

const useStubsPath = usePackageStubsPath("@henrotaym/ts-boilerplate");

const useScaffolding = () => {
  useSentence("Hi there 👋");
  useSentence("Let's scaffold a new typescript project 🎉");

  const folder = usePrompt("Folder location [.]", ".");
  const location = useCurrentPath(folder);
  const lastFolderLocationName = location.split("/").slice(-1)[0];

  const organizationName = usePrompt(
    "Organization name [deegital]",
    "deegital"
  );

  const packageName = usePrompt(
    `Package name [${lastFolderLocationName}]`,
    lastFolderLocationName
  );

  const description = usePrompt(
    `Package description [${lastFolderLocationName}]`,
    lastFolderLocationName
  );

  const authorName = usePrompt(
    "Author full name [Henrotay Mathieu]",
    "Henrotay Mathieu"
  );

  const authorEmail = usePrompt(
    "Author email [mathieu.henrotay@gmail.com]",
    "mathieu.henrotay@gmail.com"
  );

  const data = {
    organizationName,
    packageName,
    description,
    authorName,
    authorEmail,
  };

  useDisplayJson({ location, ...data });

  const isConfirmed = useConfirm("Is it correct ? ");

  if (!isConfirmed) {
    useSentence("Scaffolding was cancelled ❌");
    useSentence("Come back when you're ready 😎");
    return;
  }

  const generator = useGenerator(data);

  generator.copy(useStubsPath(), location);

  useSentence("Successfully scaffolded project ✅");
  useSentence("Happy coding 🍺");
};

export default useScaffolding;
