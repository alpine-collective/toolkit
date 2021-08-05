import Range from '../../$range/src/index'
import Scroll from '../../$scroll/src/index'
import Truncate from '../../$truncate/src/index'
import Dbg from '../../$dbg/src/index'
import Screen from '../../$screen/src/index'
import Root from '../../$root/src/index'
import Debounce from '../../$debounce/src/index'
import Throttle from '../../$throttle/src/index'

export default function (Alpine) {
    Range(Alpine)
    Scroll(Alpine)
    Truncate(Alpine)
    Dbg(Alpine)
    Screen(Alpine)
    Root(Alpine)
    Debounce(Alpine)
    Throttle(Alpine)
}
