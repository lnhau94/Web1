import {statisticsView} from './huy_view_statistic.js'
import {handleEventStatistics} from './huy_model_statistic.js'
document.getElementById("root").innerHTML += statisticsView.renderStatistics()
handleEventStatistics()