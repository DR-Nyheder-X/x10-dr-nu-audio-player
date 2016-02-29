defmodule App.EpisodeTest do
  use App.ModelCase

  alias App.Episode

  @valid_attrs %{authors: "some content", description: "some content", duration: "1:00", headline: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    file = %Plug.Upload{path: "test/fixtures/audio.mp3", filename: "audio.mp3"}

    changeset = Episode.changeset(%Episode{}, Map.merge(@valid_attrs, %{
      audio: file
    }))

    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Episode.changeset(%Episode{}, @invalid_attrs)
    refute changeset.valid?
  end
end
