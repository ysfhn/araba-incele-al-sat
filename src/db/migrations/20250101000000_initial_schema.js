/**
 * İlk migrasyon: Tüm tabloları oluştur
 * Bu dosya mevcut database.js'deki CREATE TABLE ifadelerinin Knex karşılığıdır.
 */

exports.up = function(knex) {
  return knex.schema

    // ─── Kullanıcılar ───
    .createTable('users', t => {
      t.increments('id').primary();
      t.string('email').unique().notNullable();
      t.string('password').notNullable();
      t.string('name').notNullable();
      t.string('phone');
      t.string('avatar');
      t.string('role').defaultTo('bireysel');
      t.integer('is_verified').defaultTo(0);
      t.integer('profile_completion').defaultTo(25);
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    // ─── İşletmeler ───
    .createTable('businesses', t => {
      t.increments('id').primary();
      t.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
      t.string('name').notNullable();
      t.string('slug').unique().notNullable();
      t.string('type').defaultTo('servis');
      t.text('description');
      t.text('address');
      t.string('city');
      t.string('district');
      t.string('phone');
      t.string('email');
      t.string('website');
      t.string('logo');
      t.string('cover_image');
      t.float('rating').defaultTo(0);
      t.integer('review_count').defaultTo(0);
      t.integer('is_premium').defaultTo(0);
      t.integer('is_verified').defaultTo(0);
      t.float('lat');
      t.float('lng');
      t.text('working_hours');
      t.text('services');
      t.timestamp('created_at').defaultTo(knex.fn.now());
    })

    // ─── Markalar ───
    .createTable('brands', t => {
      t.increments('id').primary();
      t.string('name').unique().notNullable();
      t.string('slug').unique().notNullable();
      t.string('logo');
    })

    // ─── Modeller ───
    .createTable('models', t => {
      t.increments('id').primary();
      t.integer('brand_id').notNullable().references('id').inTable('brands');
      t.string('name').notNullable();
      t.string('slug').notNullable();
      t.string('body_type');
      t.unique(['brand_id', 'slug']);
    })

    // ─── İlanlar ───
    .createTable('listings', t => {
      t.increments('id').primary();
      t.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
      t.integer('brand_id').references('id').inTable('brands');
      t.integer('model_id').references('id').inTable('models');
      t.string('title').notNullable();
      t.string('slug').unique().notNullable();
      t.integer('year').notNullable();
      t.integer('km').defaultTo(0);
      t.string('fuel_type');
      t.string('transmission');
      t.integer('hp');
      t.integer('cc');
      t.string('color');
      t.string('body_type');
      t.string('drive_type');
      t.text('description');
      t.integer('price').notNullable();
      t.string('currency').defaultTo('TRY');
      t.string('city');
      t.string('district');
      t.string('status').defaultTo('active');
      t.integer('is_featured').defaultTo(0);
      t.string('package_type').defaultTo('free');
      t.integer('view_count').defaultTo(0);
      t.integer('favorite_count').defaultTo(0);
      t.integer('damage_free').defaultTo(1);
      t.integer('trade_in').defaultTo(0);
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.timestamp('updated_at').defaultTo(knex.fn.now());
      t.timestamp('expires_at');

      t.index('user_id', 'idx_listings_user');
      t.index('brand_id', 'idx_listings_brand');
      t.index('status', 'idx_listings_status');
      t.index('price', 'idx_listings_price');
      t.index('year', 'idx_listings_year');
      t.index('city', 'idx_listings_city');
    })

    // ─── İlan Görselleri ───
    .createTable('listing_images', t => {
      t.increments('id').primary();
      t.integer('listing_id').notNullable().references('id').inTable('listings').onDelete('CASCADE');
      t.text('url').notNullable();
      t.integer('is_primary').defaultTo(0);
      t.integer('sort_order').defaultTo(0);
    })

    // ─── İlan Özellikleri ───
    .createTable('listing_features', t => {
      t.increments('id').primary();
      t.integer('listing_id').notNullable().references('id').inTable('listings').onDelete('CASCADE');
      t.string('feature').notNullable();
    })

    // ─── Favoriler ───
    .createTable('favorites', t => {
      t.increments('id').primary();
      t.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
      t.integer('listing_id').notNullable().references('id').inTable('listings').onDelete('CASCADE');
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.unique(['user_id', 'listing_id']);

      t.index('user_id', 'idx_favorites_user');
    })

    // ─── Mesajlar ───
    .createTable('messages', t => {
      t.increments('id').primary();
      t.integer('sender_id').notNullable().references('id').inTable('users');
      t.integer('receiver_id').notNullable().references('id').inTable('users');
      t.integer('listing_id').references('id').inTable('listings');
      t.text('content').notNullable();
      t.integer('is_read').defaultTo(0);
      t.timestamp('created_at').defaultTo(knex.fn.now());

      t.index('sender_id', 'idx_messages_sender');
      t.index('receiver_id', 'idx_messages_receiver');
    })

    // ─── Forum Kategorileri ───
    .createTable('forum_categories', t => {
      t.increments('id').primary();
      t.string('name').notNullable();
      t.string('slug').unique().notNullable();
      t.text('description');
      t.string('icon');
      t.string('color').defaultTo('#1775d3');
      t.integer('sort_order').defaultTo(0);
      t.integer('topic_count').defaultTo(0);
      t.integer('post_count').defaultTo(0);
    })

    // ─── Forum Konuları ───
    .createTable('forum_topics', t => {
      t.increments('id').primary();
      t.integer('category_id').notNullable().references('id').inTable('forum_categories');
      t.integer('user_id').notNullable().references('id').inTable('users');
      t.string('title').notNullable();
      t.string('slug').unique().notNullable();
      t.text('content').notNullable();
      t.integer('is_pinned').defaultTo(0);
      t.integer('is_locked').defaultTo(0);
      t.integer('view_count').defaultTo(0);
      t.integer('reply_count').defaultTo(0);
      t.timestamp('last_reply_at');
      t.integer('last_reply_by').references('id').inTable('users');
      t.timestamp('created_at').defaultTo(knex.fn.now());

      t.index('category_id', 'idx_forum_topics_category');
    })

    // ─── Forum Yanıtları ───
    .createTable('forum_replies', t => {
      t.increments('id').primary();
      t.integer('topic_id').notNullable().references('id').inTable('forum_topics').onDelete('CASCADE');
      t.integer('user_id').notNullable().references('id').inTable('users');
      t.text('content').notNullable();
      t.integer('like_count').defaultTo(0);
      t.timestamp('created_at').defaultTo(knex.fn.now());

      t.index('topic_id', 'idx_forum_replies_topic');
    })

    // ─── Forum Beğenileri ───
    .createTable('forum_likes', t => {
      t.increments('id').primary();
      t.integer('user_id').notNullable().references('id').inTable('users');
      t.integer('reply_id').notNullable().references('id').inTable('forum_replies').onDelete('CASCADE');
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.unique(['user_id', 'reply_id']);
    })

    // ─── Değerlendirmeler ───
    .createTable('reviews', t => {
      t.increments('id').primary();
      t.integer('business_id').notNullable().references('id').inTable('businesses').onDelete('CASCADE');
      t.integer('user_id').notNullable().references('id').inTable('users');
      t.integer('rating').notNullable();
      t.text('comment');
      t.string('service_type');
      t.timestamp('created_at').defaultTo(knex.fn.now());
    })

    // ─── Randevular ───
    .createTable('appointments', t => {
      t.increments('id').primary();
      t.integer('business_id').notNullable().references('id').inTable('businesses');
      t.integer('user_id').notNullable().references('id').inTable('users');
      t.string('service_type');
      t.string('vehicle_info');
      t.date('date').notNullable();
      t.string('time').notNullable();
      t.string('status').defaultTo('pending');
      t.text('notes');
      t.timestamp('created_at').defaultTo(knex.fn.now());
    })

    // ─── Teklif İstekleri ───
    .createTable('quote_requests', t => {
      t.increments('id').primary();
      t.integer('business_id').notNullable().references('id').inTable('businesses');
      t.integer('user_id').notNullable().references('id').inTable('users');
      t.string('vehicle_info');
      t.string('service_type');
      t.text('description');
      t.string('status').defaultTo('pending');
      t.integer('quote_amount');
      t.timestamp('created_at').defaultTo(knex.fn.now());
    })

    // ─── Bildirimler ───
    .createTable('notifications', t => {
      t.increments('id').primary();
      t.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
      t.string('type').notNullable();
      t.string('title').notNullable();
      t.text('message');
      t.string('link');
      t.integer('is_read').defaultTo(0);
      t.timestamp('created_at').defaultTo(knex.fn.now());

      t.index('user_id', 'idx_notifications_user');
    })

    // ─── Araç Hub ───
    .createTable('vehicle_hubs', t => {
      t.increments('id').primary();
      t.integer('brand_id').notNullable().references('id').inTable('brands');
      t.integer('model_id').notNullable().references('id').inTable('models');
      t.integer('year');
      t.integer('avg_price');
      t.string('fuel_type');
      t.string('engine');
      t.integer('hp');
      t.string('torque');
      t.string('transmission');
      t.string('acceleration');
      t.string('top_speed');
      t.string('fuel_consumption');
      t.string('length');
      t.string('width');
      t.string('height');
      t.string('wheelbase');
      t.string('weight');
      t.float('editor_rating');
      t.text('editor_review');
      t.text('pros');
      t.text('cons');
      t.text('image_url');
      t.timestamp('created_at').defaultTo(knex.fn.now());
    })

    // ─── Moderasyon Kuyruğu ───
    .createTable('moderation_queue', t => {
      t.increments('id').primary();
      t.string('type').notNullable();
      t.integer('item_id').notNullable();
      t.text('reason');
      t.integer('reported_by').references('id').inTable('users');
      t.string('status').defaultTo('pending');
      t.integer('reviewed_by').references('id').inTable('users');
      t.timestamp('created_at').defaultTo(knex.fn.now());
    })

    // ─── İşletme Konumları (harita) ───
    .then(() => {
      // Ek indeksler (businesses)
      return knex.schema.table('businesses', t => {
        t.index('city', 'idx_businesses_city');
        t.index('type', 'idx_businesses_type');
      });
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('moderation_queue')
    .dropTableIfExists('vehicle_hubs')
    .dropTableIfExists('notifications')
    .dropTableIfExists('quote_requests')
    .dropTableIfExists('appointments')
    .dropTableIfExists('reviews')
    .dropTableIfExists('forum_likes')
    .dropTableIfExists('forum_replies')
    .dropTableIfExists('forum_topics')
    .dropTableIfExists('forum_categories')
    .dropTableIfExists('messages')
    .dropTableIfExists('favorites')
    .dropTableIfExists('listing_features')
    .dropTableIfExists('listing_images')
    .dropTableIfExists('listings')
    .dropTableIfExists('models')
    .dropTableIfExists('brands')
    .dropTableIfExists('businesses')
    .dropTableIfExists('users');
};
