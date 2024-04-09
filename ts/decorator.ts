import { log } from "console"

const Base:ClassDecorator = (target)=> {
  console.log(target)
}
@Base
class Http {

}