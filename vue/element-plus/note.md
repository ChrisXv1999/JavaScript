###

#### BEM
- block 块   box
独立的实体 本身有意义
- element 元素 box__input
块的一部分
- modifier 修饰符 box__input--small
改变外观和行为

###
left 权重高于right ？

```scss
$namespace : 'el';
$element-separator: '-';
$element-modifier: '--';
$element-separator: '__';
@mixin b($block){
    $b : $namespace + $element-separator + $block;
    @at-root {
          .#{$b} {
            @content
          }
    }
};

@mixin m($modifiers){
    $selector : &;
    $m : '';
    @each $modifier in $modifiers {
        $m: $selector + $modifier-separator + $modifier + ',';
    }
    @at-root {
          .#{$m} {
            @content
          }
    }
};

@mixin e($element){
    $selector : &;
    $e : $selector + $element-separator + $element;
    @at-root {
          .#{$e} {
            @content
          }
    }
};

@each $item in $list;
@each $key, $value in $map;
```
#### map相关函数
```scss
map-get 获取一个key的值
map-merge 合并两个map
map-remove 删除一个key
map-keys 获取map的所有key
map-values 获取所有的value
map-has-key 是否包含key
keywords 返回一个函数 这个函数可以动态的设置key和value
inspect
```
**SCSS操作符两边必须有空格**

#### 组件测试
使用shallowMount