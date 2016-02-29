defmodule App.EpisodeTest do
  use App.ModelCase

  alias App.Episode

  @valid_attrs %{audio_url: "some content", authors: "some content", description: "some content", duration: 42, headline: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Episode.changeset(%Episode{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Episode.changeset(%Episode{}, @invalid_attrs)
    refute changeset.valid?
  end
end
