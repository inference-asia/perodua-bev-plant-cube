cube(`violation_groups`, {
  sql_table: `public.violation_groups`,

  data_source: `default`,

  joins: {
    cameras: {
      sql: `${CUBE}.camera = ${cameras}.id`,
      relationship: `belongsTo`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },

    camera: {
      sql: `camera`,
      type: `number`,
    },

    name: {
      sql: `name`,
      type: `string`,
    },

    original_image: {
      sql: `original_image`,
      type: `string`,
    },

    annotated_image: {
      sql: `annotated_image`,
      type: `string`,
    },

    date_created: {
      sql: `date_created`,
      type: `time`,
    },

    date_updated: {
      sql: `date_updated`,
      type: `time`,
    },

    datetime: {
      sql: `datetime`,
      type: `time`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
