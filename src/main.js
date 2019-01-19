import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "normalize.css";
import {
    Pagination,
    Dialog,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Tag,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Icon,
    Row,
    Col,
    Progress,
    Badge,
    Steps,
    Step,
    ColorPicker,
    Container,
    Header,
    Aside,
    Main,
    Slider,
    Footer,
    Message,
} from 'element-ui';

const _element = [Pagination, Dialog, Menu, Submenu, MenuItem, MenuItemGroup, Input, Radio, RadioGroup, RadioButton, Checkbox, CheckboxButton, CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    Tag,
    Slider,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Icon,
    Row,
    Col,
    Progress,
    Badge,
    Steps,
    Step,
    ColorPicker,
    Container,
    Header,
    Aside,
    Main,
    Footer
]

_element.forEach(item => { Vue.use(item) })

import store from './store'
Vue.use(require('vue-moment'));
Vue.component(Message);
Vue.prototype.$message = Message;
Vue.config.productionTip = false
import storage from './storage'
new Vue({
    router,
    store,
    storage,
    render: h => h(App)
}).$mount('#app')