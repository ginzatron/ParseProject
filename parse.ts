interface WordNode {
  id: string | null;
  tabs: number;
  nodes: WordNode[];
}

const tokens = ["(", ",", ")", " "];

let answer: WordNode[] = [];
let tabs: number = -1;

function parse(s: string): void {
  let curNode: WordNode | null = null;

  for (let i = 0; i < s.length - 1; ) {
    let curToken = s[i];

    if (curToken && !tokens.includes(curToken)) {
      let { word, endToken } = getWordAndEndToken(s.slice(i));
      const newNode: WordNode = {
        id: word,
        tabs: tabs,
        nodes: [],
      };

      if (!curNode) {
        answer.push(newNode);
      } else {
        curNode.nodes.push(newNode);
      }

      if (endToken === "(") {
        curNode = newNode;
      } else if (endToken === ")") {
        curNode = null;
      }

      i = i + word.length;
    } else if (curToken === "(") {
      tabs++;
      i++;
    } else if (curToken === ")") {
      tabs--;
      i++;
    } else {
      i++;
    }
  }

  printAsIs(answer);
  console.log("----------------------");
  printAlphabetically(answer);
}

function printAsIs(r: WordNode[]): void {
  const spacing = "  ";
  r.forEach((node) => {
    let tabs = spacing.repeat(node.tabs);
    let readOut = `${tabs}-  ${node.id}`;
    console.log(readOut);
    if (node.nodes.length > 0) {
      printAsIs(node.nodes);
    }
  });
}

function printAlphabetically(r: WordNode[]): void {
  const spacing = "  ";
  r.sort((a, b) => {
    if (a.id! < b.id!) return -1;
    if (a.id! > b.id!) return 1;
    return 0;
  });
  r.forEach((node) => {
    let tabs = spacing.repeat(node.tabs);
    let readOut = `${tabs}-  ${node.id}`;
    console.log(readOut);
    if (node.nodes.length > 0) {
      printAlphabetically(node.nodes);
    }
  });
}

function getWordAndEndToken(s: string): { word: string; endToken: string } {
  let word = "";
  let endToken = "";

  for (let j = 0; j < s.length; j++) {
    let curToken = s[j];
    if (curToken && !tokens.includes(curToken)) {
      word += curToken;
    } else {
      endToken = curToken!;
      break;
    }
  }
  return { word: word, endToken: endToken };
}

parse(
  "(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)"
);
