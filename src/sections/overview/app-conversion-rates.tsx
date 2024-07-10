import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { SxProps, Theme } from '@mui/material/styles';

import { fNumber } from 'src/utils/format-number';
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

interface AppConversionRatesProps {
  title: string;
  subheader?: string;
  chart: {
    colors: string[];
    series: { label: string; value: number }[];
    options?: object;
  };
  sx?: SxProps<Theme>;
}

export default function AppConversionRates({ title, subheader, chart, ...other }: AppConversionRatesProps) {
  const { colors, series, options } = chart;

  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    colors,
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '28%',
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: series.map((i) => i.label),
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }}>
        <Chart
          dir="ltr"
          type="bar"
          series={[{ data: chartSeries }]}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}
