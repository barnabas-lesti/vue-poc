import { registerMessages } from '../i18n';
import LayoutFooter from './layout-footer.vue';
import LayoutHeader from './layout-header.vue';
import LayoutMobileSidebar from './layout-mobile-sidebar.vue';
import messages from './messages.yaml';

registerMessages(messages);

export { LayoutFooter, LayoutHeader, LayoutMobileSidebar };
