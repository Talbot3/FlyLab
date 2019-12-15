## VIM 教程

[vim视频教学](http://blog.fishc.com/tag/vim%E8%A7%86%E9%A2%91%E6%95%99%E5%AD%A6)
[Vim从入门到精通-基础篇实战视频课程](http://edu.51cto.com/course/course_id-6354.html)

## VIM 
[lantian_123的博客vim 博客教程](http://liuzhijun.iteye.com/category/270228)

## VIM（没有鼠标的时候，无法想像的便捷操作）
> more power than sublime
[Vim练级攻略](http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/)
### 简明摘要如下：
注意点：
> ctrl+s是一个古老的shell控制键，在输入ctrl+q就可以恢复了
```javascript
// First Level
i → Insert mode. Type ESC to return to Normal mode.
x → Delete the char under the cursor
:wq → Save and Quit (:w save, :q quit)
dd → Delete (and copy) the current line
p → Paste
Recommended:

hjkl (highly recommended but not mandatory) → basic cursor move (←↓↑→). Hint: j looks like a down arrow.
:help <command> → Show help about <command>. You can use :help without a <command> to get general help.

// Second Level

/*** Insert mode variations: ***/

a → insert after the cursor
o → insert a new line after the current one
O → insert a new line before the current one
cw → replace from the cursor to the end of the word

/*** Basic moves ***/
0 → go to the first column(number zero)
^ → go to the first non-blank character of the line
$ → go to the end of line
g_ → go to the last non-blank character of line
/pattern → search for pattern

/*** Copy/Paste ***/
P → paste before, remember p is paste after current position.
yy → copy the current line, easier but equivalent to ddP

/*** Undo/Redo ***/
u → undo
<C-r> → redo

/*** Load/Save/Quit/Change File (Buffer) ***/
:e <path/to/file> → open
:w → save
:saveas <path/to/file> → save to <path/to/file>
:x, ZZ or :wq → save and quit (:x only save if necessary)
:q! → quit without saving, also: :qa! to quit even if there are modified hidden buffers.
:bn (resp. :bp) → show next (resp. previous) file (buffer)


// 3rd Level – Better. Stronger. Faster.
/*** Vim Command (normal Model)-help you to repeat ***/
2dd → will delete 2 lines
3p → will paste the text 3 times
100idesu [ESC] → will write “desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu”
. → Just after the last command will write again the 100 “desu”.
3. → Will write 3 “desu” (and not 300, how clever).


/*** Vim Command (normal Model)-how to move efficiently with vim ***/
NG → Go to line N
gg → shortcut for 1G - go to the start of the file
G → Go to last line

/*** Vim Command (normal Model)-how to move word move efficiently with vim ***/

w → go to the start of the following word,
e → go to the end of this word.
By default, words are composed of letters and the underscore character. Let’s call a WORD a group of letter separated by blank characters. If you want to consider WORDS, then just use uppercase characters:

W → go to the start of the following WORD,
E → go to the end of this WORD.

/*** /Pattern find Next by #(*) or find ( then % to next ) ***/
% : Go to the corresponding (, {, [.
* (resp. #) : go to next (resp. previous) occurrence of the word under the cursor

/*** <start position><command><end position> ***/

For example : 0y$ means

0 → go to the beginning of this line
y → yank from here
$ → up to the end of this line

// Tip with postition-comand-position
But what was true for y (yank), is also true for d (delete), v (visual select), gU (uppercase), gu (lowercase), etc…


```
