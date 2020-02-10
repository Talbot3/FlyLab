# Python Tutorial

## 语句缩进

```
python最具特色的就是使用缩进来表示代码块，不需要使用大括号 {} 。
缩进的空格数是可变的，但是同一个代码块的语句必须包含相同的缩进空格数。
```

## [python项目依赖安装](https://pip.pypa.io/en/stable/user_guide/)

```
# python项目中必须包含一个 requirements.txt 文件，用于记录所有依赖包及其精确的版本号。以便新环境部署。

# 在虚拟环境中使用pip生成：
(venv) $ pip freeze >requirements.txt

# 当需要创建这个虚拟环境的完全副本，可以创建一个新的虚拟环境，并在其上运行以下命令：
(venv) $ pip install -r requirements.txt
```

## 参考
- https://www.imooc.com/search/?type=course&words=python
- https://www.runoob.com/python3/python3-function.html