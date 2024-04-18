## Webpack Plugin Hooks 详细说明

### 1. `entryOption`

- **作用：** 在Webpack处理`entry`选项之前触发。
- **参数：** `context` - 当前的编译上下文。
- **示例用途：** s
- **如何使用：** 
  ```javascript
  compiler.hooks.entryOption.tap('MyPlugin', (context) => {
    // 动态设置入口文件路径
    context.addEntry('app', './src/app.js');
  });
  ```

### 2. `afterPlugins`

- **作用：** 在Webpack加载所有插件后触发。
- **参数：** 无。
- **示例用途：** 这是自定义插件的最佳注册位置。
- **如何使用：** 
  ```javascript
    compiler.hooks.afterPlugins.tap('MyPlugin', () => {
    // 注册自定义插件
        compiler.options.plugins.push(new MyCustomPlugin());
    });
  ```
### 3. `compilation`

- **作用：** 在每次新的编译创建时触发。
- **参数：** `compilation` - 当前的编译对象。
- **示例用途：** 可以用于注册与编译相关的插件。
- **如何使用：** 
  ```javascript
    compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
      // 注册自定义插件
        compilation.hooks.optimize.tap('MyPlugin', () => {
            console.log('Optimizing modules...');
        });
    });
  ```

### 4. `normalModuleFactory`

- **作用：** 在模块工厂创建后触发。
- **参数：** `normalModuleFactory` - 当前的模块工厂。
- **示例用途：** 可以用于自定义模块解析的行为。
- **如何使用：** 
  ```javascript
   compiler.hooks.normalModuleFactory.tap('MyPlugin', (normalModuleFactory) => {
  // 修改模块解析行为
        normalModuleFactory.hooks.resolve.tap('MyPlugin', (resolveData) => {
            console.log('Resolving module:', resolveData.request);
        });
    });
  ```

### 5. `beforeCompile`

- **作用：** 在编译开始之前触发。
- **参数：** `params` - 编译参数。
- **示例用途：** 在编译之前执行一些准备工作。
- **如何使用：** 
  ```javascript
  compiler.hooks.beforeCompile.tap('MyPlugin', (params) => {
    // 执行一些准备工作
    console.log('Preparing for compilation...');
  });
  ```

### 6. `compile`

- **作用：** 在编译创建时触发。
- **参数：** 无。
- **示例用途：** 在编译创建时执行一些初始化操作。
- **如何使用：** 
  ```javascript
  compiler.hooks.compile.tap('MyPlugin', () => {
    // 执行一些初始化操作
    console.log('Initializing compilation...');
  });
  ```

### 7. `make`

- **作用：** 在编译开始之前触发（异步）。
- **参数：** `compilationParams` - 编译参数，`callback` - 回调函数，用于通知Webpack编译已完成。
- **示例用途：** 在编译开始前执行一些异步任务。
- **如何使用：** 
  ```javascript
  compiler.hooks.make.tapAsync('MyPlugin', (compilationParams, callback) => {
        // 执行异步任务
        doSomeAsyncTask((err, result) => {
            if (err) return callback(err);
            console.log('Async task completed:', result);
            callback();
        });
    });
  ```

### 8. `afterCompile`

- **作用：** 在编译完成后触发。
- **参数：** `compilation` - 当前的编译对象。
- **示例用途：** 在编译完成后执行一些清理操作。
- **如何使用：** 
  ```javascript
  compiler.hooks.afterCompile.tap('MyPlugin', (compilation) => {
    // 执行一些清理操作
    console.log('Cleaning up after compilation...');
  });
  ```

### 9. `emit`

- **作用：** 在将资源输出到输出目录之前触发。
- **参数：** `compilation` - 当前的编译对象。
- **示例用途：** 在资源输出之前执行一些处理逻辑。
- **如何使用：** 
  ```javascript
  compiler.hooks.emit.tap('MyPlugin', (compilation) => {
    // 执行一些资源输出前的处理逻辑
    // ...
  });
  ```

### 10. `afterEmit`

- **作用：** 在资源已输出到输出目录之后触发。
- **参数：** `compilation` - 当前的编译对象。
- **示例用途：** 在资源输出之后执行一些额外的操作。
- **如何使用：** 
  ```javascript
  compiler.hooks.afterEmit.tap('MyPlugin', (compilation) => {
    // 执行一些资源输出后的额外操作
    // ...
  });
  ```

### 11. `done`

- **作用：** 当编译完成且所有插件已执行完毕后触发。
- **参数：** `stats` - 编译统计信息。
- **示例用途：** 在编译完成后执行一些收尾工作。
- **如何使用：** 
  ```javascript
  compiler.hooks.done.tap('MyPlugin', (stats) => {
  // 执行一些收尾工作
  // ...
  });
  ```

### 12. `failed`

- **作用：** 当编译失败时触发。
- **参数：** `error` - 错误信息。
- **示例用途：** 在编译失败时执行一些错误处理逻辑。
- **如何使用：** 
  ```javascript
  compiler.hooks.failed.tap('MyPlugin', (error) => {
  // 执行一些错误处理逻辑
  // ...
  });
  ```


### 13. `invalid`

- **作用：** 当监视模式下编译无效时触发。
- **参数：** 无。
- **示例用途：** 在编译无效时执行一些额外的操作。
- **如何使用：** 
   ```javascript
  compiler.hooks.invalid.tap('MyPlugin', (error) => {
    // 执行一些监视模式下编译无效时的额外操作
  });
  ```

### 14. `watchRun`

- **作用：** 在监视模式下编译重新启动之前触发。
- **参数：** `compiler` - 当前的编译器。
- **示例用途：** 在编译重新启动前执行一些操作。
- **如何使用：** 
   ```javascript
  compiler.hooks.watchRun.tap('MyPlugin', (compiler) => {
    // 在编译重新启动前执行一些操作
    // ...
  });
  ```
