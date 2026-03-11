// ============================================================
// Arabaİncele.com - Frontend Application
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // ── Flash Messages ──
  initFlashMessages();
  // ── Navbar ──
  initNavbar();
  // ── Search ──
  initGlobalSearch();
  // ── Favorites ──
  initFavoriteButtons();
  // ── Forum ──
  initForumLikes();
  // ── Brand / Model Cascade ──
  initBrandModelCascade();
  // ── Price Formatting ──
  initPriceFormatting();
  // ── Messages ──
  initMessageSystem();
  // ── Notifications ──
  initNotifications();
  // ── Appointments ──
  initAppointments();
  // ── Quote Requests ──
  initQuoteRequests();
  // ── Reviews ──
  initReviews();
  // ── Listing Management ──
  initListingManagement();
  // ── Admin Actions ──
  initAdminActions();
  // ── Business Panel ──
  initBusinessPanel();
  // ── User Profile ──
  initUserProfile();
  // ── Image Preview ──
  initImagePreview();
  // ── Confirm Dialogs ──
  initConfirmDialogs();
  // ── Mobile Menu ──
  initMobileMenu();
  // ── Tabs ──
  initTabs();
  // ── Copy to Clipboard ──
  initCopyButtons();
  // ── Lazy Images ──
  initLazyImages();
  // ── Smooth Scroll ──
  initSmoothScroll();
});

// ============================================================
// 1. Flash Messages
// ============================================================
function initFlashMessages() {
  document.querySelectorAll('.flash-message').forEach(el => {
    setTimeout(() => {
      el.style.transition = 'opacity .5s';
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 500);
    }, 4000);
    const btn = el.querySelector('.flash-close');
    if (btn) btn.addEventListener('click', () => el.remove());
  });
}

// ============================================================
// 2. Navbar – Scroll Shadow & Active Link
// ============================================================
function initNavbar() {
  const nav = document.querySelector('nav, header');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('shadow-lg', window.scrollY > 10);
  });
  const path = window.location.pathname;
  document.querySelectorAll('nav a[href]').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('text-blue-600', 'font-semibold');
  });
}

// ============================================================
// 3. Global Search with Suggestions
// ============================================================
function initGlobalSearch() {
  const input = document.getElementById('globalSearch') || document.querySelector('input[name="q"]');
  if (!input) return;

  let debounce;
  let box = document.getElementById('searchSuggestions');
  if (!box) {
    box = document.createElement('div');
    box.id = 'searchSuggestions';
    box.className = 'absolute z-50 w-full bg-white border rounded-lg shadow-lg mt-1 hidden max-h-80 overflow-y-auto';
    input.parentElement.style.position = 'relative';
    input.parentElement.appendChild(box);
  }

  input.addEventListener('input', () => {
    clearTimeout(debounce);
    const q = input.value.trim();
    if (q.length < 2) { box.classList.add('hidden'); return; }
    debounce = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search/suggestions?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        if (!data.suggestions || data.suggestions.length === 0) {
          box.classList.add('hidden');
          return;
        }
        box.innerHTML = data.suggestions.map(s => `
          <a href="${s.url}" class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b last:border-0">
            <span class="material-symbols-outlined text-gray-400 text-sm">${s.type === 'listing' ? 'directions_car' : s.type === 'brand' ? 'star' : s.type === 'business' ? 'store' : 'search'}</span>
            <div>
              <div class="text-sm font-medium text-gray-800">${escapeHtml(s.title)}</div>
              ${s.subtitle ? `<div class="text-xs text-gray-500">${escapeHtml(s.subtitle)}</div>` : ''}
            </div>
          </a>
        `).join('');
        box.classList.remove('hidden');
      } catch { box.classList.add('hidden'); }
    }, 300);
  });

  document.addEventListener('click', e => {
    if (!box.contains(e.target) && e.target !== input) box.classList.add('hidden');
  });
}

// ============================================================
// 4. Favorite Toggle
// ============================================================
function initFavoriteButtons() {
  document.querySelectorAll('[data-favorite]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.favorite;
      try {
        const res = await fetch(`/api/favorite/${id}`, { method: 'POST' });
        const data = await res.json();
        if (res.status === 401) { window.location.href = '/auth/giris'; return; }
        if (!res.ok) { showToast(data.error || 'Hata oluştu', 'error'); return; }

        const icon = btn.querySelector('.material-symbols-outlined, .material-icons');

        // Handle det-fav-btn (ilan-detay page)
        if (btn.classList.contains('det-fav-btn')) {
          if (data.favorited) {
            btn.classList.add('active');
            if (icon) {
              icon.textContent = 'favorite';
              icon.style.fontVariationSettings = "'FILL' 1";
            }
            // Update text node
            const textNodes = Array.from(btn.childNodes).filter(n => n.nodeType === 3);
            textNodes.forEach(n => { if (n.textContent.trim()) n.textContent = ' Favorilerde'; });
          } else {
            btn.classList.remove('active');
            if (icon) {
              icon.textContent = 'favorite_border';
              icon.style.fontVariationSettings = '';
            }
            const textNodes = Array.from(btn.childNodes).filter(n => n.nodeType === 3);
            textNodes.forEach(n => { if (n.textContent.trim()) n.textContent = ' Favorile'; });
          }
        }
        // Handle ilan-fav-btn (ilan-arama page)
        else if (btn.classList.contains('ilan-fav-btn')) {
          if (icon) {
            if (data.favorited) {
              icon.textContent = 'favorite';
              icon.style.color = '#dc2626';
            } else {
              icon.textContent = 'favorite_border';
              icon.style.color = '';
            }
          }
        }
        // Generic fallback
        else {
          if (icon) {
            if (data.favorited) {
              icon.textContent = 'favorite';
              icon.classList.add('text-red-500');
              icon.classList.remove('text-gray-400');
            } else {
              icon.textContent = 'favorite_border';
              icon.classList.remove('text-red-500');
              icon.classList.add('text-gray-400');
            }
          }
        }

        btn.classList.toggle('favorited', data.favorited);
        const countEl = btn.querySelector('.fav-count');
        if (countEl && data.totalFavorites !== undefined) countEl.textContent = data.totalFavorites;

        showToast(data.favorited ? 'Favorilere eklendi' : 'Favorilerden çıkarıldı', 'success');
      } catch { showToast('Bağlantı hatası', 'error'); }
    });
  });
}

// ============================================================
// 5. Forum Likes
// ============================================================
function initForumLikes() {
  document.querySelectorAll('[data-like-reply]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const id = btn.dataset.likeReply;
      try {
        const res = await fetch(`/api/forum/like/${id}`, { method: 'POST' });
        const data = await res.json();
        if (res.status === 401) { window.location.href = '/auth/giris'; return; }
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }

        const icon = btn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = data.liked ? 'thumb_up' : 'thumb_up_off_alt';
        const countEl = btn.querySelector('.like-count');
        if (countEl) countEl.textContent = data.totalLikes || '';
        btn.classList.toggle('text-blue-600', data.liked);
      } catch { showToast('Bağlantı hatası', 'error'); }
    });
  });
}

// ============================================================
// 6. Brand / Model Cascade (ilan-ver, ilan-arama, arac-secim)
// ============================================================
function initBrandModelCascade() {
  const brandSelect = document.getElementById('brandSelect') || document.querySelector('select[name="brand_id"]');
  const modelSelect = document.getElementById('modelSelect') || document.querySelector('select[name="model_id"]');
  if (!brandSelect || !modelSelect) return;

  brandSelect.addEventListener('change', async () => {
    const brandId = brandSelect.value;
    modelSelect.innerHTML = '<option value="">Model Seçin</option>';
    if (!brandId) return;
    try {
      const res = await fetch(`/api/models/${brandId}`);
      const data = await res.json();
      (data.models || data || []).forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.id;
        opt.textContent = m.name;
        modelSelect.appendChild(opt);
      });
      // If editing, re-select saved model
      const savedModel = modelSelect.dataset.selected;
      if (savedModel) modelSelect.value = savedModel;
    } catch { /* silent */ }
  });

  // Auto-trigger if brand is pre-selected (edit mode)
  if (brandSelect.value) brandSelect.dispatchEvent(new Event('change'));
}

// ============================================================
// 7. Price Formatting
// ============================================================
function initPriceFormatting() {
  document.querySelectorAll('input[name="price"], input[data-price]').forEach(input => {
    input.addEventListener('input', () => {
      let val = input.value.replace(/[^\d]/g, '');
      if (val) input.value = Number(val).toLocaleString('tr-TR');
    });
    // Format on load
    if (input.value) {
      let val = input.value.replace(/[^\d]/g, '');
      if (val) input.value = Number(val).toLocaleString('tr-TR');
    }
  });

  // On form submit, strip formatting
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
      form.querySelectorAll('input[name="price"], input[data-price]').forEach(input => {
        input.value = input.value.replace(/[^\d]/g, '');
      });
    });
  });
}

// ============================================================
// 8. Message System
// ============================================================
function initMessageSystem() {
  // Send message modal trigger
  document.querySelectorAll('[data-send-message]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const receiverId = btn.dataset.sendMessage;
      const receiverName = btn.dataset.receiverName || 'Kullanıcı';
      const listingId = btn.dataset.listingId || '';
      openMessageModal(receiverId, receiverName, listingId);
    });
  });

  // Message form in thread page
  const threadForm = document.getElementById('messageThreadForm');
  if (threadForm) {
    threadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = threadForm.querySelector('input[name="content"], textarea[name="content"]');
      const userId = threadForm.dataset.userId;
      const listingId = threadForm.dataset.listingId || '';
      if (!input || !input.value.trim()) return;

      try {
        const res = await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ receiver_id: userId, content: input.value.trim(), listing_id: listingId || undefined })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }

        // Append message to chat
        const container = document.getElementById('messageContainer');
        if (container) {
          const div = document.createElement('div');
          div.className = 'flex justify-end mb-3';
          div.innerHTML = `
            <div class="bg-blue-500 text-white rounded-2xl rounded-br-sm px-4 py-2 max-w-xs">
              <p class="text-sm">${escapeHtml(input.value.trim())}</p>
              <span class="text-xs text-blue-100 mt-1 block">Şimdi</span>
            </div>`;
          container.appendChild(div);
          container.scrollTop = container.scrollHeight;
        }
        input.value = '';
        showToast('Mesaj gönderildi', 'success');
      } catch { showToast('Bağlantı hatası', 'error'); }
    });
  }

  // Unread message count
  updateUnreadBadge();
}

function openMessageModal(receiverId, receiverName, listingId) {
  let modal = document.getElementById('messageModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'messageModal';
    modal.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" id="messageModalOverlay">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
          <div class="bg-blue-600 px-6 py-4 flex items-center justify-between">
            <h3 class="text-white font-semibold" id="messageModalTitle">Mesaj Gönder</h3>
            <button id="messageModalClose" class="text-white hover:text-blue-200">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <form id="messageModalForm" class="p-6">
            <input type="hidden" name="receiver_id" id="msgReceiverId">
            <input type="hidden" name="listing_id" id="msgListingId">
            <textarea name="content" id="msgContent" rows="4" class="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none" placeholder="Mesajınızı yazın..." required></textarea>
            <div class="flex gap-3 mt-4">
              <button type="button" id="messageModalCancel" class="flex-1 px-4 py-2 border rounded-xl hover:bg-gray-50 transition-colors">İptal</button>
              <button type="submit" class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">Gönder</button>
            </div>
          </form>
        </div>
      </div>`;
    document.body.appendChild(modal);

    document.getElementById('messageModalClose').addEventListener('click', () => modal.classList.add('hidden'));
    document.getElementById('messageModalCancel').addEventListener('click', () => modal.classList.add('hidden'));
    document.getElementById('messageModalOverlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) modal.classList.add('hidden');
    });

    document.getElementById('messageModalForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const rid = document.getElementById('msgReceiverId').value;
      const lid = document.getElementById('msgListingId').value;
      const content = document.getElementById('msgContent').value.trim();
      if (!content) return;

      try {
        const res = await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ receiver_id: rid, content, listing_id: lid || undefined })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        modal.classList.add('hidden');
        document.getElementById('msgContent').value = '';
        showToast('Mesaj gönderildi!', 'success');
      } catch { showToast('Bağlantı hatası', 'error'); }
    });
  }

  document.getElementById('msgReceiverId').value = receiverId;
  document.getElementById('msgListingId').value = listingId;
  document.getElementById('messageModalTitle').textContent = `${receiverName} kişisine mesaj`;
  document.getElementById('msgContent').value = '';
  modal.classList.remove('hidden');
}

async function updateUnreadBadge() {
  const badge = document.getElementById('unreadMessageBadge') || document.querySelector('.unread-message-count');
  if (!badge) return;
  try {
    const res = await fetch('/api/messages/unread/count');
    if (!res.ok) return;
    const data = await res.json();
    const count = data.count || 0;
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  } catch { /* silent */ }
}

// ============================================================
// 9. Notifications
// ============================================================
function initNotifications() {
  const badge = document.getElementById('notificationBadge') || document.querySelector('.notification-count');
  if (!badge) return;

  updateNotificationBadge(badge);
  setInterval(() => updateNotificationBadge(badge), 30000);

  // Dropdown toggle
  const btn = document.getElementById('notificationBtn');
  const dropdown = document.getElementById('notificationDropdown');
  if (btn && dropdown) {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
      if (!dropdown.classList.contains('hidden')) {
        await loadNotifications(dropdown);
      }
    });
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && e.target !== btn) dropdown.classList.add('hidden');
    });
  }

  // Mark all read
  document.querySelectorAll('[data-read-all-notifications]').forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await fetch('/api/notifications/read-all', { method: 'POST' });
        if (badge) { badge.textContent = '0'; badge.classList.add('hidden'); }
        showToast('Tüm bildirimler okundu', 'success');
      } catch { /* silent */ }
    });
  });
}

async function updateNotificationBadge(badge) {
  try {
    const res = await fetch('/api/notifications/unread/count');
    if (!res.ok) return;
    const data = await res.json();
    const count = data.count || 0;
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  } catch { /* silent */ }
}

async function loadNotifications(container) {
  try {
    const res = await fetch('/api/notifications?limit=10');
    if (!res.ok) return;
    const data = await res.json();
    const list = data.notifications || [];
    if (list.length === 0) {
      container.innerHTML = '<div class="px-4 py-6 text-center text-gray-500 text-sm">Bildirim yok</div>';
      return;
    }
    container.innerHTML = `
      <div class="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
        <span class="font-semibold text-sm">Bildirimler</span>
        <button data-read-all-notifications class="text-xs text-blue-600 hover:underline">Tümünü Okundu İşaretle</button>
      </div>
      ${list.map(n => `
        <div class="px-4 py-3 border-b hover:bg-gray-50 ${n.is_read ? 'opacity-60' : ''} cursor-pointer notification-item" data-notification-id="${n.id}" data-url="${n.url || '#'}">
          <p class="text-sm text-gray-800">${escapeHtml(n.message)}</p>
          <span class="text-xs text-gray-400">${timeAgo(n.created_at)}</span>
        </div>
      `).join('')}
      <a href="/kullanici/bildirimler" class="block text-center text-sm text-blue-600 py-3 hover:bg-gray-50">Tümünü Gör</a>
    `;
    // Click handlers
    container.querySelectorAll('.notification-item').forEach(item => {
      item.addEventListener('click', async () => {
        const id = item.dataset.notificationId;
        await fetch(`/api/notification/${id}/read`, { method: 'POST' });
        if (item.dataset.url && item.dataset.url !== '#') window.location.href = item.dataset.url;
      });
    });
    // Re-bind mark all
    container.querySelectorAll('[data-read-all-notifications]').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        await fetch('/api/notifications/read-all', { method: 'POST' });
        const badge = document.getElementById('notificationBadge') || document.querySelector('.notification-count');
        if (badge) { badge.textContent = '0'; badge.classList.add('hidden'); }
        container.querySelectorAll('.notification-item').forEach(i => i.classList.add('opacity-60'));
      });
    });
  } catch { /* silent */ }
}

// ============================================================
// 10. Appointments
// ============================================================
function initAppointments() {
  document.querySelectorAll('[data-book-appointment]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const businessId = btn.dataset.bookAppointment;
      const businessName = btn.dataset.businessName || 'Servis';
      openAppointmentModal(businessId, businessName);
    });
  });
}

function openAppointmentModal(businessId, businessName) {
  let modal = document.getElementById('appointmentModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'appointmentModal';
    modal.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" id="appointmentOverlay">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
          <div class="bg-green-600 px-6 py-4 flex items-center justify-between">
            <h3 class="text-white font-semibold" id="appointmentTitle">Randevu Al</h3>
            <button id="appointmentClose" class="text-white hover:text-green-200">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <form id="appointmentForm" class="p-6 space-y-4">
            <input type="hidden" name="business_id" id="apptBusinessId">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Servis Türü</label>
              <select name="service_type" id="apptServiceType" class="w-full border rounded-xl px-4 py-2.5" required>
                <option value="">Seçin</option>
                <option value="Genel Bakım">Genel Bakım</option>
                <option value="Motor">Motor</option>
                <option value="Fren">Fren</option>
                <option value="Lastik">Lastik</option>
                <option value="Elektrik">Elektrik</option>
                <option value="Boya/Kaporta">Boya/Kaporta</option>
                <option value="Ekspertiz">Ekspertiz</option>
                <option value="Diğer">Diğer</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Tarih</label>
              <input type="date" name="date" id="apptDate" class="w-full border rounded-xl px-4 py-2.5" required min="${new Date().toISOString().split('T')[0]}">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Saat</label>
              <input type="time" name="time" id="apptTime" class="w-full border rounded-xl px-4 py-2.5" required min="08:00" max="18:00">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Not (opsiyonel)</label>
              <textarea name="notes" id="apptNotes" rows="2" class="w-full border rounded-xl px-4 py-3 resize-none" placeholder="Ek bilgi..."></textarea>
            </div>
            <div class="flex gap-3">
              <button type="button" id="appointmentCancel" class="flex-1 px-4 py-2.5 border rounded-xl hover:bg-gray-50 transition-colors">İptal</button>
              <button type="submit" class="flex-1 px-4 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">Randevu Al</button>
            </div>
          </form>
        </div>
      </div>`;
    document.body.appendChild(modal);

    document.getElementById('appointmentClose').addEventListener('click', () => modal.classList.add('hidden'));
    document.getElementById('appointmentCancel').addEventListener('click', () => modal.classList.add('hidden'));
    document.getElementById('appointmentOverlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) modal.classList.add('hidden');
    });

    document.getElementById('appointmentForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const body = {
        business_id: fd.get('business_id'),
        service_type: fd.get('service_type'),
        date: fd.get('date'),
        time: fd.get('time'),
        notes: fd.get('notes')
      };
      try {
        const res = await fetch('/api/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        modal.classList.add('hidden');
        showToast('Randevu talebiniz alındı!', 'success');
      } catch { showToast('Bağlantı hatası', 'error'); }
    });
  }

  document.getElementById('apptBusinessId').value = businessId;
  document.getElementById('appointmentTitle').textContent = `${businessName} - Randevu Al`;
  modal.classList.remove('hidden');
}

// ============================================================
// 10b. Quote Requests (Teklif İste)
// ============================================================
function initQuoteRequests() {
  document.querySelectorAll('[data-request-quote]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const businessId = btn.dataset.requestQuote;
      const businessName = btn.dataset.businessName || 'İşletme';
      openQuoteModal(businessId, businessName);
    });
  });
}

function openQuoteModal(businessId, businessName) {
  let modal = document.getElementById('quoteModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quoteModal';
    modal.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" id="quoteOverlay">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
          <div class="bg-orange-500 px-6 py-4 flex items-center justify-between">
            <h3 class="text-white font-semibold" id="quoteTitle">Teklif İste</h3>
            <button id="quoteClose" class="text-white hover:text-orange-200">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <form id="quoteForm" class="p-6 space-y-4">
            <input type="hidden" name="business_id" id="quoteBusinessId">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Araç Bilgisi</label>
              <input type="text" name="vehicle_info" id="quoteVehicle" class="w-full border rounded-xl px-4 py-2.5" placeholder="Marka, Model, Yıl" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Açıklama</label>
              <textarea name="description" id="quoteDesc" rows="3" class="w-full border rounded-xl px-4 py-3 resize-none" placeholder="Hangi hizmeti/parçayı istiyorsunuz..." required></textarea>
            </div>
            <div class="flex gap-3">
              <button type="button" id="quoteCancel" class="flex-1 px-4 py-2.5 border rounded-xl hover:bg-gray-50 transition-colors">İptal</button>
              <button type="submit" class="flex-1 px-4 py-2.5 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors">Teklif İste</button>
            </div>
          </form>
        </div>
      </div>`;
    document.body.appendChild(modal);

    document.getElementById('quoteClose').addEventListener('click', () => modal.classList.add('hidden'));
    document.getElementById('quoteCancel').addEventListener('click', () => modal.classList.add('hidden'));
    document.getElementById('quoteOverlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) modal.classList.add('hidden');
    });

    document.getElementById('quoteForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const body = {
        business_id: fd.get('business_id'),
        vehicle_info: fd.get('vehicle_info'),
        description: fd.get('description')
      };
      try {
        const res = await fetch('/api/quotes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        modal.classList.add('hidden');
        showToast('Teklif talebiniz gönderildi!', 'success');
      } catch { showToast('Bağlantı hatası', 'error'); }
    });
  }

  document.getElementById('quoteBusinessId').value = businessId;
  document.getElementById('quoteTitle').textContent = `${businessName} - Teklif İste`;
  modal.classList.remove('hidden');
}

// ============================================================
// 11. Reviews
// ============================================================
function initReviews() {
  // Star rating selection
  document.querySelectorAll('.star-rating .star').forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.dataset.value);
      const container = star.closest('.star-rating');
      const input = container.querySelector('input[name="rating"]');
      if (input) input.value = rating;
      container.querySelectorAll('.star').forEach(s => {
        const v = parseInt(s.dataset.value);
        const icon = s.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = v <= rating ? 'star' : 'star_border';
        s.classList.toggle('text-yellow-500', v <= rating);
        s.classList.toggle('text-gray-300', v > rating);
      });
    });

    star.addEventListener('mouseenter', () => {
      const rating = parseInt(star.dataset.value);
      const container = star.closest('.star-rating');
      container.querySelectorAll('.star').forEach(s => {
        const v = parseInt(s.dataset.value);
        s.classList.toggle('text-yellow-400', v <= rating);
      });
    });
  });

  // Review form submission
  const reviewForm = document.getElementById('reviewForm');
  if (reviewForm) {
    reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(reviewForm);
      const body = {
        business_id: fd.get('business_id'),
        rating: parseInt(fd.get('rating')),
        comment: fd.get('comment')
      };
      if (!body.rating || body.rating < 1) { showToast('Lütfen puan verin', 'error'); return; }
      try {
        const res = await fetch('/api/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast('Değerlendirmeniz eklendi!', 'success');
        setTimeout(() => location.reload(), 1000);
      } catch { showToast('Bağlantı hatası', 'error'); }
    });
  }
}

// ============================================================
// 12. Listing Management (edit, delete, mark sold, unpublish)
// ============================================================
function initListingManagement() {
  // Mark as sold
  document.querySelectorAll('[data-mark-sold]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (!confirm('Bu ilanı "Satıldı" olarak işaretlemek istiyor musunuz?')) return;
      const slug = btn.dataset.markSold;
      try {
        const res = await fetch(`/ilan/${slug}/satildi`, { method: 'POST' });
        if (res.redirected) { window.location.href = res.url; return; }
        showToast('İlan satıldı olarak işaretlendi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Delete listing
  document.querySelectorAll('[data-delete-listing]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (!confirm('Bu ilanı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.')) return;
      const slug = btn.dataset.deleteListing;
      try {
        const res = await fetch(`/ilan/${slug}/sil`, { method: 'POST' });
        if (res.redirected) { window.location.href = res.url; return; }
        showToast('İlan silindi', 'success');
        setTimeout(() => window.location.href = '/kullanici/ilanlarim', 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Unpublish listing
  document.querySelectorAll('[data-unpublish-listing]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (!confirm('İlanı pasife almak istiyor musunuz?')) return;
      const slug = btn.dataset.unpublishListing;
      try {
        const res = await fetch(`/ilan/${slug}/pasif`, { method: 'POST' });
        if (res.redirected) { window.location.href = res.url; return; }
        showToast('İlan pasife alındı', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Republish listing
  document.querySelectorAll('[data-republish-listing]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const slug = btn.dataset.republishListing;
      try {
        const res = await fetch(`/ilan/${slug}/yayin`, { method: 'POST' });
        if (res.redirected) { window.location.href = res.url; return; }
        showToast('İlan tekrar yayında', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });
}

// ============================================================
// 13. Admin Actions
// ============================================================
function initAdminActions() {
  // Approve / Reject listing
  document.querySelectorAll('[data-admin-listing-status]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const status = btn.dataset.adminListingStatus;
      const id = btn.dataset.listingId;
      const label = status === 'active' ? 'onaylamak' : status === 'rejected' ? 'reddetmek' : 'askıya almak';
      if (!confirm(`Bu ilanı ${label} istiyor musunuz?`)) return;
      try {
        const res = await fetch(`/api/admin/listings/${id}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast(data.message || 'İşlem başarılı', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Feature listing toggle
  document.querySelectorAll('[data-admin-feature]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.listingId;
      const featured = btn.dataset.featured === '1' ? false : true;
      try {
        const res = await fetch(`/api/admin/listings/${id}/feature`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ featured })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast(featured ? 'İlan öne çıkarıldı' : 'Öne çıkarma kaldırıldı', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // User role change (select)
  document.querySelectorAll('[data-admin-user-role]').forEach(sel => {
    sel.addEventListener('change', async () => {
      const id = sel.dataset.userId;
      const role = sel.value;
      if (!confirm(`Kullanıcı rolünü "${role}" olarak değiştirmek istiyor musunuz?`)) { location.reload(); return; }
      try {
        const res = await fetch(`/api/admin/users/${id}/role`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ role })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast(data.message || 'Rol güncellendi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Verify user toggle
  document.querySelectorAll('[data-admin-verify-user]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.userId;
      try {
        const res = await fetch(`/api/admin/users/${id}/verify`, { method: 'PATCH' });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast(data.message || 'Kullanıcı onay durumu değiştirildi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Delete user
  document.querySelectorAll('[data-admin-delete-user]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.userId;
      if (!confirm('Bu kullanıcıyı silmek istediğinize emin misiniz?')) return;
      try {
        const res = await fetch(`/api/admin/users/${id}`, { method: 'DELETE' });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast('Kullanıcı silindi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Verify business toggle
  document.querySelectorAll('[data-admin-verify-business]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.businessId;
      try {
        const res = await fetch(`/api/admin/businesses/${id}/verify`, { method: 'PATCH' });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast(data.message || 'İşletme onay durumu değiştirildi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Premium business toggle
  document.querySelectorAll('[data-admin-premium-business]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.businessId;
      try {
        const res = await fetch(`/api/admin/businesses/${id}/premium`, { method: 'PATCH' });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast(data.message || 'Premium durumu değiştirildi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Delete business
  document.querySelectorAll('[data-admin-delete-business]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.businessId;
      if (!confirm('Bu işletmeyi silmek istediğinize emin misiniz?')) return;
      try {
        const res = await fetch(`/api/admin/businesses/${id}`, { method: 'DELETE' });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast('İşletme silindi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Delete listing (admin)
  document.querySelectorAll('[data-admin-delete-listing]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.listingId;
      if (!confirm('Bu ilanı silmek istediğinize emin misiniz?')) return;
      try {
        const res = await fetch(`/api/admin/listings/${id}`, { method: 'DELETE' });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast('İlan silindi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Delete hub
  document.querySelectorAll('[data-admin-delete-hub]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.hubId;
      if (!confirm('Bu araç hub kaydını silmek istediğinize emin misiniz?')) return;
      try {
        const res = await fetch(`/api/admin/hubs/${id}`, { method: 'DELETE' });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast('Hub silindi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Delete brand
  document.querySelectorAll('[data-admin-delete-brand]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.brandId;
      if (!confirm('Bu markayı silmek istediğinize emin misiniz?')) return;
      try {
        const res = await fetch(`/api/admin/brands/${id}`, { method: 'DELETE' });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast('Marka silindi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Delete model
  document.querySelectorAll('[data-admin-delete-model]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.modelId;
      if (!confirm('Bu modeli silmek istediğinize emin misiniz?')) return;
      try {
        const res = await fetch(`/api/admin/models/${id}`, { method: 'DELETE' });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast('Model silindi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Pin topic toggle
  document.querySelectorAll('[data-admin-pin-topic]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.topicId;
      const isPinned = btn.dataset.pinned === '1';
      try {
        const res = await fetch(`/api/admin/forum/topics/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ is_pinned: !isPinned })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast(isPinned ? 'Sabitleme kaldırıldı' : 'Konu sabitlendi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Lock topic toggle
  document.querySelectorAll('[data-admin-lock-topic]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.topicId;
      const isLocked = btn.dataset.locked === '1';
      try {
        const res = await fetch(`/api/admin/forum/topics/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ is_locked: !isLocked })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast(isLocked ? 'Kilit kaldırıldı' : 'Konu kilitlendi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Delete forum topic
  document.querySelectorAll('[data-admin-delete-topic]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.topicId;
      if (!confirm('Bu forum konusunu ve tüm yanıtlarını silmek istediğinize emin misiniz?')) return;
      try {
        const res = await fetch(`/api/admin/forum/topics/${id}`, { method: 'DELETE' });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast('Konu silindi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Moderation actions (fix: send status, not action)
  document.querySelectorAll('[data-moderation-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      const status = btn.dataset.moderationAction;
      const msg = status === 'rejected'
        ? 'Şikayeti ONAYLAYIP içeriği kaldırmak istiyor musunuz?\n\n(İçerik yayından kaldırılacak ve sahibine bildirim gidecek)'
        : 'Şikayeti REDDEDİP içeriği uygun bulmak istiyor musunuz?\n\n(İçerik yayında kalmaya devam edecek)';
      if (!confirm(msg)) return;
      try {
        const res = await fetch(`/api/admin/moderation/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast(data.message || 'İşlem tamamlandı', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Delete review (admin)
  document.querySelectorAll('[data-admin-delete-review]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.reviewId;
      if (!confirm('Bu değerlendirmeyi silmek istediğinize emin misiniz?')) return;
      try {
        const res = await fetch(`/api/reviews/${id}`, { method: 'DELETE' });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast('Değerlendirme silindi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Admin: Randevu durumu değiştir
  document.querySelectorAll('[data-admin-appt-status]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.apptId;
      const status = btn.dataset.status;
      const labels = { confirmed: 'onaylamak', cancelled: 'iptal etmek', completed: 'tamamlandı olarak işaretlemek' };
      if (!confirm(`Bu randevuyu ${labels[status] || status} istediğinize emin misiniz?`)) return;
      try {
        const res = await fetch(`/api/admin/appointments/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast(data.message || 'Güncellendi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });
}

// ============================================================
// 14. Business Panel
// ============================================================
function initBusinessPanel() {
  // Update appointment status
  document.querySelectorAll('[data-appointment-status]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.appointmentStatus;
      const status = btn.dataset.status;
      try {
        const res = await fetch(`/api/business/appointments/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast(data.message || 'Durum güncellendi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });

  // Respond to quote
  document.querySelectorAll('[data-respond-quote]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.respondQuote;
      const row = btn.closest('tr, .quote-item');
      const responseArea = row?.querySelector('.quote-response-area');
      if (responseArea) responseArea.classList.toggle('hidden');
    });
  });

  document.querySelectorAll('.quote-response-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = form.dataset.quoteId;
      const fd = new FormData(form);
      try {
        const res = await fetch(`/api/business/quotes/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ response: fd.get('response'), price: fd.get('price') })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast('Teklif yanıtı gönderildi', 'success');
        setTimeout(() => location.reload(), 800);
      } catch { showToast('Hata oluştu', 'error'); }
    });
  });
}

// ============================================================
// 15. User Profile
// ============================================================
function initUserProfile() {
  // Password change form
  const pwForm = document.getElementById('passwordForm');
  if (pwForm) {
    pwForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(pwForm);
      const newPw = fd.get('new_password');
      const confirmPw = fd.get('confirm_password');
      if (newPw !== confirmPw) { showToast('Şifreler eşleşmiyor', 'error'); return; }
      if (newPw.length < 6) { showToast('Şifre en az 6 karakter olmalı', 'error'); return; }

      try {
        const res = await fetch('/api/profile/password', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            current_password: fd.get('current_password'),
            new_password: newPw
          })
        });
        const data = await res.json();
        if (!res.ok) { showToast(data.error || 'Hata', 'error'); return; }
        showToast('Şifre güncellendi!', 'success');
        pwForm.reset();
      } catch { showToast('Bağlantı hatası', 'error'); }
    });
  }
}

// ============================================================
// 16. Image Preview
// ============================================================
function initImagePreview() {
  document.querySelectorAll('input[type="file"][accept*="image"]').forEach(input => {
    input.addEventListener('change', () => {
      const container = document.getElementById('imagePreview') || input.nextElementSibling;
      if (!container) return;
      container.innerHTML = '';
      Array.from(input.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.className = 'w-20 h-20 object-cover rounded-lg border';
          container.appendChild(img);
        };
        reader.readAsDataURL(file);
      });
    });
  });

  // Gallery image click (listing detail)
  document.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const mainImg = document.getElementById('mainImage') || document.querySelector('.gallery-main img');
      if (mainImg) {
        mainImg.src = thumb.dataset.src || thumb.src;
        document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('ring-2', 'ring-blue-500'));
        thumb.classList.add('ring-2', 'ring-blue-500');
      }
    });
  });
}

// ============================================================
// 17. Confirm Dialogs
// ============================================================
function initConfirmDialogs() {
  document.querySelectorAll('[data-confirm]').forEach(el => {
    el.addEventListener('click', (e) => {
      const msg = el.dataset.confirm || 'Emin misiniz?';
      if (!confirm(msg)) { e.preventDefault(); e.stopPropagation(); }
    });
  });
}

// ============================================================
// 18. Mobile Menu
// ============================================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuBtn') || document.querySelector('[data-mobile-menu]');
  const menu = document.getElementById('mobileMenu') || document.querySelector('.mobile-menu');
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    const icon = toggleBtn.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = menu.classList.contains('hidden') ? 'menu' : 'close';
  });
}

// ============================================================
// 19. Tabs
// ============================================================
function initTabs() {
  document.querySelectorAll('[data-tab-group]').forEach(group => {
    const buttons = group.querySelectorAll('[data-tab]');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        const container = group.closest('.tab-container') || group.parentElement;
        // Update active tab button
        buttons.forEach(b => {
          b.classList.remove('border-blue-600', 'text-blue-600', 'bg-blue-50');
          b.classList.add('border-transparent', 'text-gray-500');
        });
        btn.classList.add('border-blue-600', 'text-blue-600', 'bg-blue-50');
        btn.classList.remove('border-transparent', 'text-gray-500');
        // Show/hide panels
        container.querySelectorAll('[data-tab-panel]').forEach(panel => {
          panel.classList.toggle('hidden', panel.dataset.tabPanel !== target);
        });
      });
    });
  });
}

// ============================================================
// 20. Copy Buttons
// ============================================================
function initCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
        showToast('Kopyalandı!', 'success');
      } catch {
        showToast('Kopyalanamadı', 'error');
      }
    });
  });
}

// ============================================================
// 21. Lazy Images
// ============================================================
function initLazyImages() {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
  }
}

// ============================================================
// 22. Smooth Scroll
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================================
// UTILITIES
// ============================================================

// Toast Notification
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'fixed top-4 right-4 z-[9999] flex flex-col gap-2';
    document.body.appendChild(container);
  }

  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-yellow-500 text-yellow-900'
  };
  const icons = {
    success: 'check_circle',
    error: 'error',
    info: 'info',
    warning: 'warning'
  };

  const toast = document.createElement('div');
  toast.className = `${colors[type] || colors.info} text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-slide-in min-w-[280px]`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-xl">${icons[type] || icons.info}</span>
    <span class="text-sm font-medium flex-1">${escapeHtml(message)}</span>
    <button class="hover:opacity-70 transition-opacity" onclick="this.parentElement.remove()">
      <span class="material-symbols-outlined text-lg">close</span>
    </button>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity .4s, transform .4s';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// Escape HTML
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Time Ago
function timeAgo(dateStr) {
  if (!dateStr) return '';
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now - date) / 1000);
  if (diff < 60) return 'Az önce';
  if (diff < 3600) return `${Math.floor(diff / 60)} dk önce`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} saat önce`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} gün önce`;
  if (diff < 2592000) return `${Math.floor(diff / 604800)} hafta önce`;
  return date.toLocaleDateString('tr-TR');
}

// Format price in Turkish Lira
function formatPrice(price) {
  if (!price && price !== 0) return '';
  return Number(price).toLocaleString('tr-TR') + ' ₺';
}

// Debounce helper
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Make showToast and formatPrice globally available
window.showToast = showToast;
window.formatPrice = formatPrice;
window.escapeHtml = escapeHtml;
window.timeAgo = timeAgo;

// ── Toast Animation via CSS ──
(function injectToastCSS() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(100%); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-in { animation: slideIn .3s ease-out; }
  `;
  document.head.appendChild(style);
})();

// ============================================================
// RAPORLAMA MODAL (Global)
// ============================================================
function openReportModal(type, itemId) {
  // Giriş kontrolü
  if (!document.body.hasAttribute('data-logged-in')) {
    showToast('Raporlamak için giriş yapmalısınız', 'warning');
    setTimeout(() => { window.location.href = '/auth/giris'; }, 1200);
    return;
  }

  // Mevcut modal varsa kaldır
  const existing = document.getElementById('reportModal');
  if (existing) existing.remove();

  const typeLabels = {
    listing: 'İlanı', business: 'İşletmeyi', forum_topic: 'Forum Konusunu',
    forum_reply: 'Forum Yanıtını', review: 'Değerlendirmeyi'
  };

  const reasons = [
    { value: 'Spam veya reklam', label: '📢 Spam veya reklam' },
    { value: 'Yanıltıcı bilgi', label: '⚠️ Yanıltıcı bilgi' },
    { value: 'Uygunsuz içerik', label: '🚫 Uygunsuz içerik' },
    { value: 'Hakaret / küfür', label: '💢 Hakaret / küfür' },
    { value: 'Dolandırıcılık şüphesi', label: '🕵️ Dolandırıcılık şüphesi' },
    { value: 'Telif hakkı ihlali', label: '©️ Telif hakkı ihlali' },
    { value: 'Diğer', label: '📝 Diğer' },
  ];

  const modal = document.createElement('div');
  modal.id = 'reportModal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.5);backdrop-filter:blur(4px);animation:fadeIn .2s;';
  modal.innerHTML = `
    <div style="background:#fff;border-radius:20px;width:90%;max-width:440px;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,.25);animation:scaleIn .25s ease-out;">
      <div style="background:linear-gradient(135deg,#dc2626,#b91c1c);padding:20px 24px;color:#fff;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:10px;">
            <span class="material-symbols-outlined" style="font-size:1.5rem;">flag</span>
            <div>
              <h3 style="margin:0;font-size:1.1rem;font-weight:700;">${typeLabels[type] || 'İçeriği'} Raporla</h3>
              <p style="margin:2px 0 0;font-size:.75rem;opacity:.8;">Raporunuz gizli tutulacaktır</p>
            </div>
          </div>
          <button onclick="closeReportModal()" style="background:rgba(255,255,255,.15);border:none;color:#fff;width:32px;height:32px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;">
            <span class="material-symbols-outlined" style="font-size:18px;">close</span>
          </button>
        </div>
      </div>
      <div style="padding:24px;">
        <p style="font-size:.85rem;color:#555;margin:0 0 16px;">Neden raporluyorsunuz?</p>
        <div id="reportReasons" style="display:flex;flex-direction:column;gap:8px;">
          ${reasons.map(r => `
            <label style="display:flex;align-items:center;gap:10px;padding:10px 14px;border:1px solid #e2e8f0;border-radius:10px;cursor:pointer;transition:all .15s;font-size:.9rem;" 
              onmouseover="this.style.borderColor='#dc2626';this.style.background='#fef2f2'" 
              onmouseout="if(!this.querySelector('input').checked){this.style.borderColor='#e2e8f0';this.style.background='#fff'}">
              <input type="radio" name="reportReason" value="${r.value}" style="accent-color:#dc2626;">
              <span>${r.label}</span>
            </label>
          `).join('')}
        </div>
        <div id="reportCustomReason" style="display:none;margin-top:12px;">
          <textarea id="reportCustomText" placeholder="Detaylı açıklama yazın..." style="width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:10px;font-size:.85rem;resize:none;height:70px;box-sizing:border-box;"></textarea>
        </div>
        <div style="display:flex;gap:10px;margin-top:20px;">
          <button onclick="closeReportModal()" style="flex:1;padding:12px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;color:#666;font-size:.9rem;font-weight:600;cursor:pointer;">İptal</button>
          <button onclick="submitReport('${type}', ${itemId})" style="flex:1;padding:12px;border:none;border-radius:10px;background:linear-gradient(135deg,#dc2626,#b91c1c);color:#fff;font-size:.9rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;">
            <span class="material-symbols-outlined" style="font-size:16px;">send</span> Rapor Gönder
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Overlay click to close
  modal.addEventListener('click', (e) => { if (e.target === modal) closeReportModal(); });

  // "Diğer" seçilince custom textarea göster
  modal.querySelectorAll('input[name="reportReason"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const custom = document.getElementById('reportCustomReason');
      custom.style.display = radio.value === 'Diğer' ? 'block' : 'none';
      // Seçili label'ı vurgula
      modal.querySelectorAll('#reportReasons label').forEach(l => {
        if (l.querySelector('input').checked) {
          l.style.borderColor = '#dc2626';
          l.style.background = '#fef2f2';
        } else {
          l.style.borderColor = '#e2e8f0';
          l.style.background = '#fff';
        }
      });
    });
  });
}

function closeReportModal() {
  const modal = document.getElementById('reportModal');
  if (modal) {
    modal.style.animation = 'fadeOut .15s';
    setTimeout(() => modal.remove(), 150);
  }
}

async function submitReport(type, itemId) {
  const selected = document.querySelector('input[name="reportReason"]:checked');
  if (!selected) {
    showToast('Lütfen bir neden seçin', 'warning');
    return;
  }
  let reason = selected.value;
  if (reason === 'Diğer') {
    const custom = document.getElementById('reportCustomText')?.value?.trim();
    if (custom) reason = custom;
  }

  const btn = document.querySelector('#reportModal button:last-child');
  if (btn) { btn.disabled = true; btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px;animation:spin 1s linear infinite;">refresh</span> Gönderiliyor...'; }

  try {
    const res = await fetch('/api/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, item_id: itemId, reason })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      closeReportModal();
      showToast(data.message || 'Raporunuz alındı', 'success');
    } else {
      showToast(data.error || 'Rapor gönderilemedi', 'error');
      if (btn) { btn.disabled = false; btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px;">send</span> Rapor Gönder'; }
    }
  } catch {
    showToast('Bağlantı hatası', 'error');
    if (btn) { btn.disabled = false; btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px;">send</span> Rapor Gönder'; }
  }
}

// Modal animations
(function() {
  const animStyle = document.createElement('style');
  animStyle.textContent = `
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes fadeOut { from { opacity:1; } to { opacity:0; } }
    @keyframes scaleIn { from { opacity:0; transform:scale(.9); } to { opacity:1; transform:scale(1); } }
    @keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
  `;
  document.head.appendChild(animStyle);
})();
