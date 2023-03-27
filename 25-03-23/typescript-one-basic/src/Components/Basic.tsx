const Basic = () => {
  let bol: boolean;
  bol = true;

  let num: number = 10;

  let str: string = "hey";

  let numStr: number | string = "19";
  numStr = 10;

  let arr: Array<number | string> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  arr.push("hello");
  arr.push(12);

  let arr2: number[] = [1, 2, 3];
  arr2.push(2);

  let arr4: readonly string[] = ["hello", "hi"];

  const sum = (a: number, b: number): number => {
    return a + b;
  };

  const print = (a: number, b: number): void => {
    console.log(a, b);
  };

  interface user {
    id: number;
    name: string;
    married: boolean;
    hobbies: Array<string>;
  }

  let user: user = {
    id: 1,
    name: "John",
    married: true,
    hobbies: ["coding,jumping"],
  };

  return (
    <>
      <h1>Basic</h1>
    </>
  );
};

export default Basic;
