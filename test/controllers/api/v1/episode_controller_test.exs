defmodule Controllers.Api.V1.EpisodeControllerTest do
  use App.ConnCase

  test "GET index" do
    conn = get conn, api_episode_path(conn, :index)
    assert json_response(conn, 200)
  end
end
