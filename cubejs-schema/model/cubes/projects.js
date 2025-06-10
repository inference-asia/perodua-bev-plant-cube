cube(`projects`, {
  sql_table: `public.projects`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    lat: {
      sql: `lat`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    lng: {
      sql: `lng`,
      type: `string`
    },
    
    slug: {
      sql: `slug`,
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
