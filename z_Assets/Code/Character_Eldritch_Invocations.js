const char = dv.current() ?? {};
const BASE_FOLDER = char.BASE_FOLDER;
const phbInvocations = `${BASE_FOLDER}/optional-features`;
const rawInvocations = char.Eldritch_Invocations ?? [];
if (rawInvocations && Object.keys(rawInvocations).length > 0) { dv.paragraph(`###### Eldritch Invocations`)}
// Normalize invocations into `{ name, data }`
const invocation = rawInvocations.map(f => {
    if (typeof f === "string") {
        return { name: f, data: null };
    }
    if (typeof f === "object") {
        const key = Object.keys(f)[0];
        return { name: key, data: f[key] };
    }
});

// Build array of items for dv.list()
const listItems = invocation.map(invocation => {
    const invocationFile = `${phbInvocations}/${invocation.name.toLowerCase().replace(/ /g, "-").replace(/['’]/g, "")}-xphb`;
    return dv.fileLink(invocationFile, false, invocation.name);
});

// Render as diamond-style list (same as your class features)
dv.list(listItems);