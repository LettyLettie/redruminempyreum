export async function onRequestPost(context) {
  try {
    const secret = (context.env.SECRET_KEYWORD || "").trim().toLowerCase();
    if (!secret) {
      return json({ ok: false, error: "secret_not_configured" }, 500);
    }

    const body = await context.request.json().catch(() => ({}));
    const keyword = String(body.keyword || "").trim().toLowerCase();

    if (!keyword) {
      return json({ ok: false, error: "missing_keyword" }, 400);
    }

    if (keyword === secret) {
      return json({ ok: true, payload: "（10.9 , 11.6）" }, 200);
    }

    return json({ ok: false }, 401);
  } catch (error) {
    return json({ ok: false, error: "internal_error" }, 500);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Cache-Control": "no-store"
    }
  });
}
