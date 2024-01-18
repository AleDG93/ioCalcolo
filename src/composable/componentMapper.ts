// Import the required components
import Proportion from '@/components/ReversePercentage.vue';
import Finance from '@/components/Finance.vue';
import FiscalCode from '@/components/FiscalCode.vue';
import Percentage from '@/components/Percentage.vue';
import ReversePercentage from '@/components/ReversePercentage.vue';
import InversePercentage from '@/components/InversePercentage.vue';

// Export a map from string to Vue component
const componentMap: any = {
    proportion: Proportion,
    finance: Finance,
    fiscalCode: FiscalCode,
    percentage: Percentage,
    reversePercentage: ReversePercentage,
    inversePercentage: InversePercentage
};

export default componentMap;
