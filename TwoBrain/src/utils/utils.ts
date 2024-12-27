export function random(len: number) {
  const options = "jsgdkfgej3453245324";
  const length = options.length;
  let ans = "";
  for (let i = 0; i < length; i++) {
    ans += options[Math.floor(Math.random() * length)];
  }

  return ans;
}
