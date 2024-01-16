// Import the required components
import Proportion from '@/components/Proportion.vue';
import Finance from '@/components/Finance.vue';
import FiscalCode from '@/components/FiscalCode.vue';
import Percentages from '@/components/Percentages.vue';

// Export a map from string to Vue component
const componentMap: any = {
    proportion: Proportion,
    finance: Finance,
    fiscalCode: FiscalCode,
    percentages: Percentages
};

export default componentMap;
