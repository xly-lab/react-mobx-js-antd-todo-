# react、mobx、antd、js完成的todo练习项目
## 启动
+  yarn 
+  yarn start
## 总结
+ 首先清楚装饰器，并知道@observable，@action，@computed(都是mobx提供)的作用
+ 在需要用到状态的组件上注入状态 @inject(...),类组件与函数组件的写法各有不同
## 问题
+ 在用到antd库里的List组件时，有一个属性renderItem是通过一个匿名函数获取的，由于作用域的问题，使得匿名函数内部所用到的参数不是observable。虽说mobx里的数据改变了，但是视图却没有变化。因此就出现了我list.jsx文件里有三个类，可以看出，我将匿名函数里用到的属性，逐级创建了一个类，就解决了该问题。