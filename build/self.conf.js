const fs = require('fs')
const path = require('path')
const glob = require('glob')
const project = process.env.PROJECT

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function getEntries (globPath) {
  let files = glob.sync(globPath)
  let entries = {}

  files.forEach(function (filepath) {
    let split = filepath.split('/')
    let name = ''
    // 取倒数第三层(module 下面的文件夹)做包名
    for (let i = 3; i < split.length - 1; i++) {
      name += split[i] + '_'
    }
    name = name.slice(0, -1)
    entries[name] = './' + filepath
  })
  return entries
}

exports.genRouter = _ => {
  let pathUrl = ''
  pathUrl = `src/${project}/views/**/**/`

  let router = ''
  const entries = getEntries(pathUrl + 'index.vue')
  Object.keys(entries).forEach(function (name) {
    const names = name.split('/')
    const chunkName = names[names.length - 1]
    const path = name.replace(/_/g, '/')
    router += `const ${name} = _ => import(/* webpackChunkName: '${chunkName}' */ 'views/${path}/index.vue')\n`
  })
  router += '\nexport default {\n'
  Object.keys(entries).forEach(function (name) {
    let path = name.replace(/_/g, '/')
    router += `  '/${path}': ${name},\n`
  })
  router = router.slice(0, -2)
  router += '\n}'

  let routerFile = `${resolve(`src/${project}/router/`)}${project}.js`

  fs.exists(routerFile, (isExists) => {
    if (isExists) {
      console.log(`路由文件已经存在，准备替换掉旧的路由文件，文件原路径：${routerFile}`)
      fs.unlink(routerFile, (err) => {
        if (err) {
          console.log(`路由文件删除失败，错误信息：${JSON.stringify(err)}`)
          return false
        }
        console.log(`路由文件删除成功！`)
      })
    }
    console.log(`start generate src/${project}/router/${project}.js ...`)
    fs.writeFileSync(routerFile, router)
    console.log(`start generate src/${project}/router/${project}.js ...`)

  })
}
