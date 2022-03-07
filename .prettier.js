/*
 * @Description: 配置 prettier 格式化规则:
 */
module.exports = {
  tabWidth: 2,
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  jsxSingleQuote: true,
  jsxBracketSameLine: true, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  printWidth: 100, // 每行代码长度（默认80）
  singleQuote: true, // 使用单引号（默认false）
  semi: true, // 声明结尾使用分号(默认true)
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "avoid", //只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
};
