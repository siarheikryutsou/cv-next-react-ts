type DefaultMetaData = {
    title:string,
    description:string
}

const defaultMetaData:DefaultMetaData = {
    title: "Siarhei Kryutsou | ",
    description: "Personal site of Siarhei Kryutsou | Front End Developer",
}

export default function setMetadata(properties:Object):Object {
    if("title" in properties) {
        properties.title = defaultMetaData.title + properties.title;
    }
    return {...defaultMetaData, ...properties};
}