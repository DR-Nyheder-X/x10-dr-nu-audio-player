defmodule App.Router do
  use App.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api/v1", App do
    pipe_through :api
    get "/playlists", Api.V1.PlaylistController, :index
  end

  scope "/admin", App, as: :admin do
    pipe_through :browser

    resources "/episodes", Admin.EpisodeController
    get "/", Admin.EpisodeController, :index
  end

  scope "/", App do
    pipe_through :browser
    get "*path", PageController, :index
  end
end
