#### 数据模板规范 DTD
数据模板中的每个属性有三个部分构成 属性名 生成规则 属性值
'name|rule':value
###### 生成规则
1. min-max
2. count
3. min-max.dmin-dmax
4. min-max.dcount
5. count.dmin-dmax
6. count.dcount
7. +step
 mock 函数 通过模板生成数据
##### Random
```javascript
[
  'extend',            'boolean',      'bool',
  'natural',           'integer',      'int',
  'float',             'character',    'char',
  'string',            'str',          'range',
  '_patternLetters',   '_rformat',     '_formatDate',
  '_randomDate',       'date',         'time',
  'datetime',          'now',          '_adSize',
  '_screenSize',       '_videoSize',   'image',
  'img',               '_brandColors', '_brandNames',
  'dataImage',         'color',        'hex',
  'rgb',               'rgba',         'hsl',
  '_goldenRatioColor', 'paragraph',    'cparagraph',
  'sentence',          'csentence',    'word',
  'cword',             'title',        'ctitle',
  'first',             'last',         'name',
  'cfirst',            'clast',        'cname',
  'url',               'protocol',     'domain',
  'tld',               'email',        'ip',
  'region',            'province',     'city',
  'county',            'zip',          'capitalize',
  'upper',             'lower',        'pick',
  'shuffle',           'order',        'd4',
  'd6',                'd8',           'd12',
  'd20',               'd100',         'guid',
  'uuid',              'id',           'increment',
  'inc'
]
````
