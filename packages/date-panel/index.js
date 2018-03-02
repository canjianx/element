import DatePanel from '../date-picker/src/panel/date.vue';

/* istanbul ignore next */
DatePanel.install = function install(Vue) {
  Vue.component(DatePanel.name, DatePanel);
};

export default DatePanel;
