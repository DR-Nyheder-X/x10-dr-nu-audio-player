defmodule App.Admin.EpisodeControllerTest do
  use App.ConnCase
  import App.Factory

  test "GET index" do
    conn = get conn, admin_episode_path(conn, :index)
    assert html_response(conn, 200)
  end

  test "GET new" do
    conn = get conn, admin_episode_path(conn, :new)
    assert html_response(conn, 200)
  end

  test "POST create with success" do
    conn = post conn, admin_episode_path(conn, :create),
      episode: fields_for(:episode)

    assert response(conn, 302)
  end

  test "POST create with failure" do
    conn = post conn, admin_episode_path(conn, :create),
      episode: %{}

    assert html_response(conn, 200)
  end

  test "GET show" do
    episode = create :episode

    conn = get conn, admin_episode_path(conn, :show, episode)

    assert html_response(conn, 200)
  end

  test "GET edit" do
    episode = create :episode

    conn = get conn, admin_episode_path(conn, :edit, episode)

    assert html_response(conn, 200)
  end

  test "PATCH update with success" do
    episode = create :episode

    conn = patch conn, admin_episode_path(conn, :update, episode),
      episode: fields_for(:episode)

    assert response(conn, 302)
  end

  test "PATCH update with failure" do
    episode = create :episode

    conn = patch conn, admin_episode_path(conn, :update, episode),
      episode: %{headline: ""}

    assert html_response(conn, 200)
  end

  test "DELETE delete" do
    episode = create :episode

    conn = delete conn, admin_episode_path(conn, :delete, episode)

    assert response(conn, 302)
  end
end
