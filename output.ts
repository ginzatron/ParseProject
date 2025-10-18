let s = "(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)";

interface WordNode {
    id: string;
    tabs: number;
    nodes: WordNode[];    
};

let firstNode: WordNode = {
    id: "id",
    tabs: 0,
    nodes: []
}

let secondNode: WordNode = {
    id: "name",
    tabs: 0,
    nodes: []
}

let thirdNode: WordNode = {
    id: "email",
    tabs: 0,
    nodes: []
}

let fourthNode: WordNode = {
    id: "type",
    tabs: 0,
    nodes: [{
        id: "id",
        tabs: 1,
        nodes: []
    }, {
        id: "name",
        tabs: 1,
        nodes: []
    },
    {
        id: "customFields",
        tabs: 1,
        nodes: [{
            id: "c1",
            tabs: 2,
            nodes: []
        }, {
            id: "c2",
            tabs: 2,
            nodes: []
        }, {
            id: "c3",
            tabs: 2,
            nodes: []
        }]
    }]
}

let fifthNode: WordNode = {
    id: "externalId",
    tabs: 0,
    nodes: []
}

let nodes: WordNode[] = [firstNode, secondNode, thirdNode, fourthNode, fifthNode];