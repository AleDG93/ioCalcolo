// Import the required components
import Proportion from '@/components/Proportion.vue';
import Finance from '@/components/Finance.vue';
import Test from '@/components/Test.vue';
import FiscalCode from '@/components/FiscalCode.vue';

// Export a map from string to Vue component
const componentMap: any = {
    proportion: Proportion,
    finance: Finance,
    fiscalCode: FiscalCode,
    test: Test
};

export default componentMap;
