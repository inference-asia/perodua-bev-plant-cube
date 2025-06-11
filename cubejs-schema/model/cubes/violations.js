cube(`violations`, {
  sql_table: `public.violations`,

  data_source: `default`,

  joins: {
    violation_groups: {
      sql: `${CUBE}.violation_group = ${violation_groups}.id`,
      relationship: `belongsTo`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },

    violation_group: {
      sql: `violation_group`,
      type: `number`,
    },

    type: {
      sql: `type`,
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
