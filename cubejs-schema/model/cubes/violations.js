cube(`violations`, {
  sql_table: `public.violations`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    date_created: {
      sql: `date_created`,
      type: `time`
    },
    
    date_updated: {
      sql: `date_updated`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
