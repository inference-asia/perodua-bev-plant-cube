cube(`cameras`, {
  sql_table: `public.cameras`,

  data_source: `default`,

  joins: {
    projects: {
      sql: `${CUBE}.project = ${projects}.id`,
      relationship: `belongsTo`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },

    project: {
      sql: `project`,
      type: `number`,
    },

    type: {
      sql: `type`,
      type: `string`,
    },

    stream_key: {
      sql: `stream_key`,
      type: `string`,
    },

    detections: {
      sql: `detections`,
      type: `string`,
    },

    hls_url: {
      sql: `hls_url`,
      type: `string`,
    },

    name: {
      sql: `name`,
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
