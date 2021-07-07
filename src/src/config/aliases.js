const aliases = (prefix = `src`) => ({
  "@pages": `${prefix}/pages`,
  "@components": `${prefix}/components`,
  "@services": `${prefix}/services`,
  "@models": `${prefix}/models`,
});

module.exports = aliases;
