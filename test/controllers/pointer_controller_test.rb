require "test_helper"

class PointerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pointer_index_url
    assert_response :success
  end
end
